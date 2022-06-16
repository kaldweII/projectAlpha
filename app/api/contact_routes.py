from itertools import count
from flask import Blueprint, jsonify, session, request
from app.models import Contact, db
from app.forms import ContactsForm

contact_routes = Blueprint('contacts', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
    return errorMessages

@contact_routes.route('/', methods=['POST', 'GET'])
def main():
    """
    Creates a new user and logs them in
    """
    print('yes')
    form = ContactsForm()
    form['csrf_token'].data = request.cookies['csrf_token']
 
 
    if form.validate_on_submit():
        first_name=form.data['first_name'],
        last_name=form.data['last_name'],
        email=form.data['email'],
        gender=form.data['gender'],
        title=form.data['title'],
        country_code=form.data['country_code'],
        mobile_phone_number=form.data['mobile_phone_number'],
        office_phone_number=form.data['office_phone_number'],
        office_phone_extension=form.data['office_phone_extension'],
        linkedin_url=form.data['linkedin_url'],
        customer=form.data['customer'],


        new_contact = Contact(
            first_name=first_name, last_name=last_name, email=email,gender=gender, title=title,country_code=country_code, 
            mobile_phone_number=mobile_phone_number, office_phone_number=office_phone_number, office_phone_extension=office_phone_extension, 
            linkedin_url=linkedin_url, customer=customer
        )
    
        db.session.add(new_contact)
        db.session.commit()
        return new_contact.to_dict()
    elif form.errors:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    elif request.method == 'GET':
        contacts = Contact.query.all()
        return {"contacts": [contact.to_dict() for contact in contacts]}

