import { useEffect } from 'react';
import { themeChange } from 'theme-change';

const ThemeSelector = () => {

    useEffect(() => {
        themeChange(false);
    }, [])

    const supportThemes = [
        "winter", "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee"
    ];

    return (
        <select className="select select-bordered w-full max-w-xs" data-choose-theme>
            {
                supportThemes.map((name, index) => {
                    return (<option key={index} value={name}>{name}</option>);
                })
            }
        </select>
    );
}

export default ThemeSelector;