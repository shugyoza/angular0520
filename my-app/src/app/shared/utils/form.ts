export interface TextField {
    id: string;
    type: string;
    label: string;
    placeholder: string;
    // validators: any{}
}
export const form = {
    fields: {
        firstName: {
            id: 'firstName',
            type: 'text',
            label: 'First Name',
            placeholder: 'e.g. Tahm',
            defaultValue: '',
            validators: {
                required: true,
                min: 2,
                max: 255,
                filter: ''
            }
        },
        lastName: {
            id: 'lastName',
            type: 'text',
            label: 'Last Name',
            placeholder: 'e.g. Kench',
            defaultValue: '',
            validators: {
                required: true,
                min: 2,
                max: 255,
                filter: ''
            }
        },
        email: {
            id: 'email',
            type: 'email',
            label: 'Email',
            placeholder: 'e.g. tkench@email.com',
            defaultValue: '',
            validators: {
                required: true,
                min: 2,
                max: 255,
                filter: ''
            }
        },
        username: {
            id: 'username',
            type: 'text',
            label: 'Username',
            placeholder: 'e.g. tkench',
            defaultValue: '',
            validators: {
                required: true,
                min: 2,
                max: 255,
                filter: ''
            }
        },
        password: {
            id: 'password',
            type: 'password',
            label: 'Password',
            placeholder: 'e.g. Password123?',
            defaultValue: '',
            validators: {
                required: true,
                min: 6,
                max: 255,
                filter: ''
            }
        },
        confirmPassword: {
            id: 'confirmPassword',
            type: 'password',
            label: 'Confirm Password',
            placeholder: 'e.g. Password123?',
            defaultValue: '',
            validators: {
                required: true,
                min: 6,
                max: 255,
                filter: ''
            }
        },
        phone: {
            id: 'phone',
            type: 'text',
            label: 'Phone #',
            placeholder: 'e.g. +1(234)456-7890',
            defaultValue: '',
            validators: {
                required: true,
                min: 10,
                max: 15,
                filter: ''
            }
        },
        sex: {
            id: 'sex',
            type: 'radio',
            label: 'Sex',
            options: {
                male: {
                    id: 'sexMale',
                    label: 'Male',
                    value: 'male'
                },
                female: {
                    id: 'sexFemale',
                    label: 'Female',
                    value: 'female'
                }
            },
            validators: {required: true}
        },
        address1: {
            id: 'address1',
            type: 'text',
            label: 'Address',
            placeholder: 'e.g. 1234 Freeway # 1',
            defaultValue: '',
            validators: {
                required: true,
                min: 8,
                max: 255
            }
        },
        address2: {
            id: 'address2',
            type: 'text',
            label: 'Address',
            placeholder: 'e.g. Apt. ABC',
            defaultValue: '',
            validators: {
                required: false,
                min: false,
                max: 255
            }
        },
        city: {
            id: 'city',
            type: 'text',
            label: 'City',
            placeholder: 'e.g. New York',
            defaultValue: '',
            validators: {
                required: true,
                min: 3,
                max: 255
            }
        },
        county: {
            id: 'county',
            type: 'text',
            label: 'County',
            placeholder: 'e.g. Orange County',
            defaultValue: '',
            validators: {
                required: false,
                min: 3,
                max: 255
            }
        },
        stateProvince: {
            id: 'stateProvince',
            type: 'text',
            label: 'State/Province',
            placeholder: 'e.g. California',
            defaultValue: '',
            validators: {
                required: true,
                min: 3,
                max: 255
            }
        },
        country: {
            id: 'country',
            type: 'text',
            label: 'Country',
            placeholder: 'e.g. Brazil',
            defaultValue: '',
            validators: {
                required: false,
                min: false,
                max: false
            }
        }
    }
}
