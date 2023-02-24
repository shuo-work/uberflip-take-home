const NAME_REG = /^[a-zA-Z]{1,20}$/;
const PASSWORD_REG = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const EMAIL_REG = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export {
    NAME_REG,
    PASSWORD_REG,
    EMAIL_REG,
}