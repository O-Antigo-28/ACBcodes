export function writeOnClipBoard(text: string){
    navigator.clipboard.writeText(text)
    .catch(() => {
        throw new Error("Não foi possivel escrever na Área de transferência")
    })
}