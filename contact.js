const contacts = []

function addContact(name, phone, email) {
  var newContact = {nom: name, telephone: phone, email: email};
  contacts.push(newContact);
}

function arrayList() {
  var liste = ""
  for (var i = 0; i < contacts.lenght; i++) {
    liste += contacts[i].nom
  }
}

function editContact(name, phone, email) {
  var i = prompt('Choississez parmis vos contacts :\n' + arrayList())
  var name = promptText("Votre nom et prénom :")
  var phone = promptNumber("Votre numéro de téléphone :")
  var email = promptEmail("Votre email :")
  var newContact = {nom: name, telephone: phone, email: email};
  contacts.splice(i, 1, newContact)
}

function searchContact(searchValue) {
  var searchValue = prompt('Saisissez votre recherche')
  if ([contacts.nom].includes(searchValue)) {
    alert('Contact existant')
  }
  if ([contacts.phone].includes(searchValue)) {
    alert('Contact existant')
  }
  if ([contacts.email].includes(searchValue)) {
    alert('Contact existant')
  }
  else {
    alert('Aucun contact lié à votre recherche')
  }
}

function deleteContact(contactIndex) {
  var contactIndex = Number(prompt("Quel est le contact à supprimer ?"))
  contacts.pop(contacts[contactIndex])
}

function choosing() {
  var choice = prompt('Bienvenue dans votre carnet de contact, que voulez vous faire ?\n'+
  '1 - Ajouter un contact\n'+
  '2 - Modifier un contact\n'+
  '3 - Supprimer un contact\n'+
  '4 - Chercher un contact\n')
  while (!Number.isInteger(parseInt(choice))) {
    choice = Number(prompt('Veuillez saisir une valeure correct \n'+
      '1 - Ajouter un contact \n'+
      '2 - Modifier un contact \n'+
      '3 - Supprimer un contact \n'+
      '4 - Chercher un contact'))
  }
  switch (parseInt(choice)) {
    case 1:
        var a = promptText("Votre nom et prénom :")
        var b = promptNumber("Votre numéro de téléphone :")
        var c = promptEmail("Votre email :")
        addContact(a, b, c)
        choosing()
    case 2:
        alert('Vous vous apprétez à modifier un contact')
        editContact()
        alert('Contact modifié')
        break
    case 3:
        alert('Vous vous apprétez à supprimer un contact')
        deleteContact()
        alert('Contact supprimé')
        break
    case 4:
        searchContact()
        choosing()
    default:
        alert('Option non supporté')
        choosing();
        break
  }
}

// pour que le texte soit reconnu en tant que tel
function promptText(text) {
  var regex = /^[a-zA-Z\s]+$/
  var badAnswer = false
  var alertMessage = ""
  var attempt = 0

  do {
    var question = text
    if (badAnswer) {
      question += '\n\nVotre texte est erroné, c\'est votre essai n°' + attempt
    }
    alertMessage = prompt(question)
    if (!regex.test(alertMessage)) {
      badAnswer = true
      attempt++
    }
    else {
      badAnswer = false
    }
  }
  while(badAnswer === true)
  
  return alertMessage
}

// pour que le numéro soit reconnu en tant que tel
function promptNumber(number) {
  var regex = /^[0-9]+$/
  var badNumber = false
  var alertMessage = ""
  var attempt = 0

  do {
    var question = number
    if (badNumber) {
      question += '\n\nVotre numéro est erroné, c\'est votre essai n°' + attempt
    }
    alertMessage = prompt(question)
    if (!regex.test(alertMessage)) {
      badNumber = true
      attempt++
    }
    else {
      badAnswer = false
    }
  }
  while(badNumber === true)
  
  return alertMessage
}

// pour que l'email soit reconnu en tant que tel
function promptEmail(mail) {
  var regex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  var badEmail = false
  var alertMessage = ""
  var attempt = 0

  do {
    var question = mail
    if (badEmail) {
      question += '\n\nVotre email est erroné, c\'est votre essai n°' + attempt
    }
    alertMessage = prompt(question)
    if (!regex.test(alertMessage)) {
      badEmail = true
      attempt++
    }
    else {
      badAnswer = false
    }
  }
  while(badEmail === true)
  
  return alertMessage
}

choosing();

/*function editContact(contactNumber) {
  for (let contact of contacts) {

  }
}*/

/*function goodChoice() {
  choice = prompt('Veuillez saisir une valeure correcte !\n'+
  '1 - Ajouter un contact\n'+
  '2 - Modifier un contact\n'+
  '3 - Supprimer un contact\n'+
  '4 - Chercher un contact\n')
}*/

/*class AddContact {
  constructor(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;
  }
  newContact() {
    let name = prompt("nom :")
    contacts.push(this.name)
    let phone = prompt("numéro de téléphone :")
    contacts.push(this.phone)
    let email = prompt("email")
    contacts.push(this.email)
  }
}

function addingContact() {
  return AddContact();
}*/

/*switch (parseInt(choice))*/