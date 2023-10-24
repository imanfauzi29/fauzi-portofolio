class Validator {
    private errors: Record<string, string> = {};
    private data: Record<string, unknown>;

    constructor(data: Record<string, unknown> = {}) {
        this.data = data;
    }

    private validate(validator: boolean, key: string, message: string) {
        if (!validator) {
            this.errors[key] = message;
        }
    }

    validateFields(schema: Record<string, ((key: string) => void)[]>) {
        Object.entries(schema).forEach(([key, validators]) => {
            validators.forEach(validator => validator(key));
        });
    }

    required(key: string) {
        const value = this.data[key];
        const validator = value !== undefined && value !== null && value !== '';
        this.validate(validator, key, 'Field is required!');
        return this;
    }

    string(key: string) {
        const value = this.data[key];
        const validator = typeof value === 'string';
        this.validate(validator, key, 'Must be a string!');
        return this;
    }

    min(key: string, length: number) {
        const value = this.data[key];
        const validator = typeof value === 'string' && value.length >= length;
        this.validate(validator, key, `Length must be at least ${length} characters!`);
        return this;
    }

    max(key: string, length: number) {
        const value = this.data[key];
        const validator = typeof value === 'string' && value.length <= length;
        this.validate(validator, key, `Length must not exceed ${length} characters!`);
        return this;
    }

    email(key: string) {
        const value = this.data[key];
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const validator = typeof value === 'string' && emailRegex.test(value);
        this.validate(validator, key, 'Email is not valid!');
        return this;
    }

    isValid() {
        return Object.keys(this.errors).length === 0;
    }

    getErrors() {
        return this.errors;
    }
}

export default Validator