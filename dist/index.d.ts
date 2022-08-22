declare type ButtonType = {
    label: string;
};

declare const Button: ({ label }: ButtonType) => JSX.Element;

export { Button };
