export interface Wallpaper {
    url: string;
    name: string;
}
 interface FullWallpaper extends Wallpaper {
    liked: boolean;
    suggested: boolean;
    library: boolean;
 }

 export function useSuggestedWallpaper(): FullWallpaper[] {
        const wallpapers = useWallpaper();
        return wallpapers.filter(wallpaper => wallpaper.suggested);
 }
 export function useLikedWallpaper(): FullWallpaper[] {
        const wallpapers = useWallpaper();
        return wallpapers.filter(wallpaper => wallpaper.liked);
 }
 export function useLibraryWallpaper(): FullWallpaper[] {
        const wallpapers = useWallpaper();
        return wallpapers.filter(wallpaper => wallpaper.library);
 }


export function useWallpaper(): FullWallpaper[] {
     return [{
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/gzCEf0h4QwaTQboHPYAW_w",
        "name": "Heritage",
        liked: true,
        suggested: true,
        library: true,
     }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/oOvAzbetS4GlLq6CMnLaqw",
         "name": "Tiger Night",
         liked: false,
         suggested: false,
         library: false,
     }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/-vRzF6LTQ72AtQzH7PnDnA",
         "name": "Lion at",
         liked: false,
         suggested: false,
         library: true,
     }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/9DkOEXtJRfmFoIcor8aMYA",   
         "name": "Late eneving",
         liked: true,
         suggested: true,
         library: false,
     }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/oOvAzbetS4GlLq6CMnLaqw",
         "name": "Late morning",
         liked: true,
         suggested: false,
         library: true,
     }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/KgyhBI_uS0OKZwsjHOqrOQ",
         "name": "Wall Paper",
         liked: true,
         suggested: true,
         library: true,
     }, {
        url: "https://ideogram.ai/assets/image/lossless/response/O0N7V3UbRlyrhty2uon8Lw",
         "name": "Late ",
         liked: true,
         suggested: false,
         library: true,
     }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/AL4Cfq0qQ_m5Gndj5OAEeA",
         "name": "House ",
         liked: true,
         suggested: false,
         library: true,
     }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/U1x1b_eWSEaLn8Gp8iQoQw",
         "name": "Quality",
         liked: true,
         suggested: false,
         library: true,
     }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/e7NOKqFWTz2w4t7n4V4Nkg",
         "name": "SpaceSheet",
         liked: true,
         suggested: false,
         library: true,
     },
    ]
}