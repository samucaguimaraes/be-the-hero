const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },

    async create(request, response) {
        /* Campos esperados por requisições*/
        const {name, email, whatsapp, city, uf} = request.body;
        /** Id gerado para identificação das ONGS */
        const id = crypto.randomBytes(4).toString('HEX'); 
        /**
         * Conecxão com o banco e geração do insert em ongs, mudando 
         * a função para Asyncrona e um wait no insert
         ***/
        await connection('ongs').insert({ 
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        return response.json({ id });
    }
 };