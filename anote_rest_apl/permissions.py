from rest_framework import permissions

from anote_rest_apl.models import Catatan
from anote_rest_member.models import MemberKegiatan


class IsSuperUser(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.is_superuser:
            return True
        else:
            return False


class IsSuperUserOrReadonly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.is_superuser:
            return True
        else:
            if request.method == 'GET':
                return True
            else:
                return False


class HasActivityPermission(permissions.BasePermission):
    """
    Ensure user is in required groups.
    """

    def has_permission(self, request, view):
        # Get a mapping of methods -> required group.
        ambil_atribut = getattr(view, 'izin_kegiatan', {})

        # Determine the required activity code for this particular request method.
        kode_kegiatan = ambil_atribut.get(request.method, 0)

        # Return True if the user in groups.
        return self.is_in_group(request.user.pk, kode_kegiatan) or request.user.is_superuser

    @staticmethod
    def is_in_group(usr, kegiatan):
        """
        Takes a user and a group name, and returns `True` if the user is in that group.
        """
        # return Group.objects.get(name=kegiatan).user_set.filter(id=user.id).exists()
        return usr in MemberKegiatan.objects.filter(kegiatan=kegiatan).values_list('personil', flat=True)


class IsOwner(permissions.BasePermission):
    def has_permission(self, request, view):
        # Get a mapping of methods -> required group.
        ambil_atribut = getattr(view, 'izin_kegiatan', {})

        # Determine the required activity code for this particular request method.
        kode_kegiatan = ambil_atribut.get(request.method, 0)

        # Get model of Catatan for owner
        catatan = Catatan.objects.filter(dibuat=request.user, kegiatan=kode_kegiatan).exists()

        return catatan or request.user.is_superuser
