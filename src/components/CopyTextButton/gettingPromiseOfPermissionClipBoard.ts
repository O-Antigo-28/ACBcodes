
export async function gettingPromiseOfPermissionStateClipBoard(): Promise<PermissionStatus>{
    const permission: Permissions = navigator.permissions
    if(!permission){
        throw new Error("não foi possivel acessa o objeto permission de navigator")
    }
    const permissonDescriptor: PermissionDescriptor =  {name: 'clipboard-write' as PermissionName }
    return permission.query(permissonDescriptor)
}