//Bibliotecas
const request = require('supertest');
const { expect } = require('chai');

describe('Transfer Controller', () => {
    describe('POST /transfer', () => {
        it('Quando informo destinatarios inexistente recebo 400', async () => {
            const resposta = await request('http://localhost:3000')
                .post('/transfers')
                .send({
                    from: "julianaaaa",
                    to: "pedro",
                    value: 100

                });
            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'Usuário remetente ou destinatário não encontrado');

        });
    });
});
