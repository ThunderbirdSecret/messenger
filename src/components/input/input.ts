import { Block } from "utils";

interface InputProps {
    type?: "phone" | "text" | "password" | "email" | "file";
    placeholder?: string;
    value?: string | HTMLInputElement | HTMLImageElement | File
    name?: "login" | "password" | "first_name" | "second_name" | "display_name" | "email" | "phone" | "avatar";
    status?: string;
    accept?: string;
    id?: string;
    class?: string;
    onInput?: (e: FocusEvent) => void;
    onBlur?: (e: FocusEvent) => void;
    onFocus?: (e: FocusEvent) => void;
    onChange?: (e: Event) => void;
}

type InputEvent = InputProps & {
    events?: {
      input?: (e: FocusEvent) => void;
      focus?: (e: FocusEvent) => void;
      blur?: (e: FocusEvent) => void;
      change?: (e: Event) => void;
    };
  };
  

export class Input extends Block{
    static cName = 'Input';

    constructor({onInput, onFocus, onBlur, onChange, ...props}: InputEvent) {
        super({
            ...props,
            events: {
            input: onInput,
            focus: onFocus,
            blur: onBlur,
            change: onChange}
        });
    }

    protected render(): string {
        return `
        <input
            class="{{class}}"
            type="{{type}}"
            placeholder="{{placeholder}}"
            value="{{value}}"
            name="{{name}}"
            {{status}}
            id="{{id}}"
            accept="{{accept}}"
        >`
    }
}

export default Input;
