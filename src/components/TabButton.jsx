export default function TabButton({ children, onSelect, isSelected }){
//     document.querySelector('button').addEventListener('click', () => {
// }); js style
    return (
        <li>
            <button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button>
        </li>
    );
}