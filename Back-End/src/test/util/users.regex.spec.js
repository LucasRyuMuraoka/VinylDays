import { __REGEX__ } from "../../util/users.regex.js";

describe('Regex Validation', () => {
  test('Name test', () => {
    const validName = "Matheus Ferreira Santos";
    expect(true).toBe(__REGEX__.NAME.test(validName));

    const invalidName = "Matheus   Ferreira";
    expect(false).toBe(__REGEX__.NAME.test(invalidName));

    const invalidName2 = "Matheu$ Ferreir4  $antos";
    expect(false).toBe(__REGEX__.NAME.test(invalidName2));
  });

  test('Password test', () => {
    /* No minimo 8 caracteres, 1 Maiúsculo, 1 Número, 1 Simbolo, Sem sequencias iguais */
    const validPassword = "D94ed383#";
    
    const invalidPassword1 = "d94ed383"; /* Sem maiusculo e simbolo */
    const invalidPassword2 = "D94ED383"; /* Sem simbolo */
    const invalidPassword3 = "D94ED38"; /* Com 1 a menos */
    const invalidPassword4 = "DD4ED383#"; /* Sequencia igual */
    const invalidPassword5 = "dDtibt#a"; /* Sem numero */

    expect(true).toBe(__REGEX__.PASSWORD.test(validPassword));

    expect(false).toBe(__REGEX__.PASSWORD.test(invalidPassword1));
    expect(false).toBe(__REGEX__.PASSWORD.test(invalidPassword2));
    expect(false).toBe(__REGEX__.PASSWORD.test(invalidPassword3));
    expect(false).toBe(__REGEX__.PASSWORD.test(invalidPassword4));
    expect(false).toBe(__REGEX__.PASSWORD.test(invalidPassword5));
  });

  test('E-mail test ', () => {
    const validEmail1 = "foo.bar@gmail.com";
    const validEmail2 = "foo.bar@gmail.com.br";

    const invalidEmail1 = "foo.bar@gmail.com.br.br"; /* com 2 extensões ".br" */
    const invalidEmail2 = "foo.bar@gmail."; /* sem a extensão ".com" */
    const invalidEmail3 = "foo.bar@gmailcom"; /* sem o "." ao lado de "com" */
    const invalidEmail4 = "foo.bargmail.com"; /* sem o "@" */
    const invalidEmail5 = "@gmail.com"; /* somente o @gmail.com */

    expect(true).toBe(__REGEX__.EMAIL.test(validEmail1));
    expect(true).toBe(__REGEX__.EMAIL.test(validEmail2));

    expect(false).toBe(__REGEX__.EMAIL.test(invalidEmail1));
    expect(false).toBe(__REGEX__.EMAIL.test(invalidEmail2));
    expect(false).toBe(__REGEX__.EMAIL.test(invalidEmail3));
    expect(false).toBe(__REGEX__.EMAIL.test(invalidEmail4));
    expect(false).toBe(__REGEX__.EMAIL.test(invalidEmail5));
  });
});