export default function Segment ({children, color}) {
    return (
        <div className={`p-12 lg:p-18 xl:p-24 bg-${color}`}>
            {children}
        </div>
    )
}