from itertools import count
from flask import Blueprint, jsonify, session, request
from app.models import Customer, db
from app.forms import CustomersForm

customer_routes = Blueprint('customers', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
    return errorMessages

@customer_routes.route('/', methods=['POST', 'GET'])
def main():
    """
    Creates a new user and logs them in
    """
    print('yes')
    form = CustomersForm()
    form['csrf_token'].data = request.cookies['csrf_token']
 
 
    if form.validate_on_submit():
        print('yes')
        name=form.data['name'],
        alias=form.data['alias'],
        address=form.data['address'],
        suite=form.data['suite'],
        city=form.data['city'],
        state=form.data['state'],
        zipcode=form.data['zipcode'],
        country=form.data['country'],
        country_code=form.data['country_code'],
        primary_phone=form.data['primary_phone'],
        primary_phone_extension=form.data['primary_phone_extension'],
        secondary_phone=form.data['secondary_phone'],
        secondary_phone_extension=form.data['secondary_phone_extension'],
        site_link=form.data['site_link'],
        industry=form.data['industry'],
        db_num=form.data['db_num'],
        invoice_email=form.data['invoice_email']



        new_customer = Customer(
            name=name, alias=alias, address=address,suite=suite, city=city, state=state,
            zipcode=zipcode, country=country, country_code=country_code, 
            primary_phone=primary_phone, primary_phone_extension=primary_phone_extension,
            secondary_phone=secondary_phone, secondary_phone_extension=secondary_phone_extension, 
            site_link=site_link, industry=industry, db_num=db_num, invoice_email=invoice_email
        )
    
        db.session.add(new_customer)
        db.session.commit()
        return new_customer.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

