import React from "react";

export type CardProps = {
    balance: number;
    name: string;
    expiration: string;
    cardNumber: string;
    variant?: string;
}

export interface LabelValueProps {
    label: string,
    value: React.ReactNode
}

const LabelValue = (props: LabelValueProps) => {
    return <div>
        <label className="text-xs leading-none">{props.label}</label>
        <h4 className="font-bold leading-none">{props.value}</h4>
    </div>
}

const darkStyles = {
    container: "bg-linear-to-r from-gray-600 to-gray-900 text-white",
    footer: "bg-linear-to-r from-white/10 to-white/0"
}

export function Card(props: CardProps) {
    const { balance, name, expiration, cardNumber, variant = "dark" } = props;
    const isDark = variant === "dark";
    {/* isDark = variant === "dark" */ }
    {/* isDark = variant === "dark" */ }



    return <section className={`${isDark ? darkStyles.container : "bg-white"} my-4 max-w-[18em] rounded-3xl mx-auto overflow-hidden`}>

        <div className="p-5">
            <header className="flex items-center justify-between">
                <LabelValue label="Balance" value={balance} />
                <img className="rounded w-8 h-6" src="https://picsum.photos/500/300" />
            </header>
            <div className="flex gap-6 mt-4">
                <LabelValue label="CARD HOLDER" value={name} />
                <LabelValue label="VALID THRU" value={expiration} />
            </div>
        </div>

        <footer className={`${isDark ? darkStyles.footer : "border-t border-slate-200"} flex items-center justify-between p-5 `}>
            <h4 className="text-lg tracking-wide font-bold">{cardNumber}</h4>

            <div className="flex">
                <div className={`w-6 h-6 ${isDark ? "bg-white" : "bg-black"} rounded-full opacity-50`}></div>
                <div className={`w-6 h-6 ${isDark ? "bg-white" : "bg-black"} rounded-full opacity-50 -left-3 relative`}></div>
            </div>
        </footer>


    </section >
}