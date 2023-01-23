import { SubmitBtn } from "helpers/submit";
import Block from "utils/Block";

// // interface RegistrationProps {
// //     dataInput: object  {}
// // }

// const dataInput: {type:string, placeholder: string, name: string, ref: string} = [
//     {
//         type: "email", placeholder: "E-mail", name: "email", ref: "emailRef"
//     },
//     {
//         type: "text", placeholder: "Login", name: "login", ref: "loginRef"
//     },
//     {
//         type: "text", placeholder: "Name", name: "first_name", ref: "nameRef"
//     },
//     {
//         type: "text", placeholder: "Second-name", name: "second-name", ref: "secondNameRef"
//     },
//     {
//         type: "tel", placeholder: "Phone", name: "phone", ref: "phoneRef"
//     },
//     {
//         type: "password", placeholder: "Password", name: "password", ref: "passwordRef"
//     },
//     {
//         type: "password", placeholder: "Password repeat", name: "password", ref: "passwordRepeatRef"
//     }
// ]

export class Registration extends Block {
    static cName = "Registration";

    constructor(){
        super()

        this.setProps({
            onInput: (e: Event) => {console.log("input")},
            onFocus: () => console.log("onFocus"),
            onSubmit: (event: Event)=>{
                return SubmitBtn(event, "registration", this.refs)
            },
        })
    }

    protected render(): string {
        return `
        <main class="flex justify-center items-center h-screen">
            <div class="w-[340px] h-[615px] bg-graphite rounded-md p-[20px] overflow-y-scroll scrollbar">
                <form class="flex flex-col gap-y-2.5 justify-center items-center">
                    {{{ Title title="Registration" }}}
                    <div class="py-0.5">
                        {{{InputControlled
                            onInput=onInput
                            onFocus=onFocus
                            onBlur=onBlur
                            type="text"
                            name="login"
                            placeholder="Login"
                            ref="login"
                            value=loginValue
                            id="loginReg"
                        }}}
                    </div>
                    <div class="py-0.5">
                        {{{InputControlled
                            onInput=onInput
                            onFocus=onFocus
                            onBlur=onBlur
                            type="password"
                            name="password"
                            placeholder="Password"
                            ref="password"
                            value=passwordValue
                            id="passwordReg"
                        }}}
                    </div>
                    <div class="py-0.5">
                        {{{InputControlled
                            onInput=onInput
                            onFocus=onFocus
                            onBlur=onBlur
                            type="password"
                            name="password_check"
                            placeholder="Password check"
                            ref="passwordCheck"
                            value=passwordCheckValue
                            id="passwordCheckReg"
                        }}}
                    </div>
                    <div class="py-0.5">
                        {{{InputControlled
                            onInput=onInput
                            onFocus=onFocus
                            onBlur=onBlur
                            type="text"
                            name="name"
                            placeholder="Name"
                            ref="name"
                            value=nameValue
                            id="nameReg"
                        }}}
                    </div>
                    <div class="py-0.5">
                        {{{InputControlled
                            onInput=onInput
                            onFocus=onFocus
                            onBlur=onBlur
                            type="text"
                            name="second_name"
                            placeholder="Second name"
                            ref="secondName"
                            value=secondNameValue
                            id="secondNameReg"
                        }}}
                    </div>
                    <div class="py-0.5">
                    {{{InputControlled
                        onInput=onInput
                        onFocus=onFocus
                        onBlur=onBlur
                        type="text"
                        name="display_name"
                        placeholder="Display name"
                        ref="displayName"
                        value=displayNameValue
                        id="displayNameReg"
                    }}}
                    </div>
                    <div class="py-0.5">
                    {{{InputControlled
                        onInput=onInput
                        onFocus=onFocus
                        onBlur=onBlur
                        type="phone"
                        name="phone"
                        placeholder="Phone"
                        ref="phone"
                        value=phoneValue
                        id="phoneReg"
                    }}}
                    </div>
                    <div class="py-0.5">
                    {{{InputControlled
                        onInput=onInput
                        onFocus=onFocus
                        onBlur=onBlur
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        ref="email"
                        value=emailValue
                        id="emailReg"
                    }}}
                    </div>
                    <div>
                        <div class="text-red pb-2" id="err"> 
                            {{{ErrorComponent text=error ref="err"}}}
                        </div>
                        {{{ ButtonConfirm
                                btn="Create account" 
                                path="../dialog/dialog.html"
                                onSubmit=onSubmit
                        }}}
                        <div class="text-center py-2 text-blue">
                            {{{ LinkPage 
                                link="../authorization/authorization.html" 
                                linkTitle="Sign in"
                            }}}
                        </div>
                    </div>
                </form>
            </div>
        </main>
        `
    }
}