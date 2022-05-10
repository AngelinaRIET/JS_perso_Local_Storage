const local = JSON.parse(localStorage.getItem("user"));

if(local != null)
{
    h1.textContent = `Bonjour ${local.nom}, tu as ${local.age} ans et tu es sur la page 2`;
}