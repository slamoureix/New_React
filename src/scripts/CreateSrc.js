/**
 * permet de créer un import dynamique d'une Imgage depuis le dossier 
 *. / .. / assets / repertory / Img / name.format.
 * 
 * @param {String} name : name of the field project
 * @param {String} format : format of the img
 * @param {String} repertory : repertory of the format
 */
export const CreateSrc = (name, format, repertory) => {
    return import(`./../assets/${repertory}/Img/${name}.${format}`)
}

