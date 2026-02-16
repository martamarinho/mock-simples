


import { Login, LoginErro, LoginErroSenha,LoginEmailVazio } from "../fixtures/Login.cy.json"



describe('acessando site', () => {


  beforeEach(() => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')

  })
  it('logando com sucesso', () => {
    cy.Login(Login.email, Login.senha)
  })

  it('Login com email errado', () => {
    cy.Login(LoginErro.email, LoginErro.senha)
  })
  it('Login com senha errada', () => {
    cy.Login(LoginErroSenha.email, LoginErroSenha.senha)

  })


})