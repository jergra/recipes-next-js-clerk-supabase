interface ILayoutProps {
    children: React.ReactNode
}

export const Layout = ({children} : ILayoutProps) => {

    return (
        <div>
            {children}
        </div>
    )
}