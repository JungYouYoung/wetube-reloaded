export const see = (req, res) => res.render("home");
export const edit = (req, res) => { 
    return res.send("Edit");
}
export const trending = (req, res) => res.send("Home Page Videos"); 
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => { 
    return res.send("Delete Video");
}