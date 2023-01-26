import { SubmitBtn } from "helpers/submit";
import Block from "utils/Block";

export class Registration extends Block {
    static cName = "Registration";

    constructor(){
        super()

        this.setProps({
            onInput: () => {console.log("input")},
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
                            name="first_name"
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
                            {{{ErrorComponent text=error ref="errReg"}}}
                        </div>
                        {{{ ButtonConfirm
                                btn="Create account" 
                                path="../dialog/dialog.html"
                                onSubmit=onSubmit
                                class="w-[280px] h-[37px] bg-gradient-b-button-color text-white text-xl rounded-lg"
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
