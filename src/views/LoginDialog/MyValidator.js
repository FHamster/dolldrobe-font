export function validatePass(rule, value, callback) {
    if (value === '') {
        callback(new Error('请输入密码'));
    } else {
        if (this.reg.uPsw !== '') {
            this.$refs.reg.validateField('checkPass');
        }
        callback();
    }
}

export function validatePass2(rule, value, callback) {
    if (value === '') {
        callback(new Error('请再次输入密码'));
    } else if (value !== this.reg.uPsw) {
        callback(new Error('两次输入密码不一致!'));
    } else {
        callback();
    }
}
