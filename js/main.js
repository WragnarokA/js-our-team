// Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
// Angela Lopez	    Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg 




let team = [
    { nome: "Wayne Barnett", professione: "Founder & CEO", img: "wayne-barnett-founder-ceo.jpg" },
    { nome: "Angela Caroll", professione: "Chief Editor", img: "angela-caroll-chief-editor.jpg" },
    { nome: "Walter Gordon", professione: "Officer Manager", img: "walter-gordon-office-manager.jpg" },
    { nome: "Angela Lopez", professione: "Social Media Manager", img: "angela-lopez-social-media-manager.jpg" },
    { nome: "Scot Estrada", professione: "Developer", img: "scott-estrada-developer.jpg" },
    { nome: "Barbara Ramos", professione: "Graphic Designer", img: "barbara-ramos-graphic-designer.jpg" }
]


for (let i = 0; i < team.length; i++) {

    const teamMember = team[i];
    const contentElement = document.getElementById("cards");
    const imgPath = "./img";
    let contentHTML = `<div class="scheda">`;
    contentHTML += `<h2>${teamMember.nome}</h2>`;
    contentHTML += `<h3>${teamMember.professione}</h3>`;
    contentHTML += `<img src="${imgPath}/${teamMember.img}" alt="${teamMember.nome}" />`;
    contentHTML += `</div>`;
    console.log("Msg", contentHTML);

    contentElement.innerHTML += contentHTML;
    
}

