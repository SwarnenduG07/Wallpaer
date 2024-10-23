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
     },
    ]
}