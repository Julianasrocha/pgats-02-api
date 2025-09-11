//Bibliotecas
const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

//Aplicacao
const app = require('../../app')

//Mock
const transferService = require('../../service/transferService')

// Testes
describe('Transfer Controller', () => {
    describe('POST /transfer', () => {
        it('Quando informo destinatarios inexistente recebo 400', async () => {
            const resposta = await request(app)
                .post('/transfer')
                .send({
                    from: "Juliana",
                    to: "Pedro",
                    value: 100

                });
            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'Usuário remetente ou destinatário não encontrado');

        });

        it('Usando Mocks: Quando informo destinatarios inexistente recebo 400', async () => {
            //mocar apenas a funcao transfer do service
            const transferServiceMock = sinon.stub(transferService, 'transfer')
            transferServiceMock.throws(new Error('Usuário remetente ou destinatário não encontrado'))

            const resposta = await request(app)
                .post('/transfer')
                .send({
                    from: "juliana",
                    to: "pedro",
                    value: 100

                });
            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'Usuário remetente ou destinatário não encontrado');

        });
    });

    describe('GET /transfers', () => {
        //its ficam aqui

    });

});
