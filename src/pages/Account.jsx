import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
function Account() {
  return (
    <>
      <Heading as="h1">Обновите свою учетную запись</Heading>

      <Row>
        <Heading as="h3">Обновление пользовательских данных</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">Обновить пароль</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
