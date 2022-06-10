from flask import Blueprint, jsonify, session, request
from app.models import Customer, db
from app.forms import CustomersForm

customer_routes = Blueprint('customer', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
    return errorMessages

@customer_routes.route('/createcustomer', methods=['POST'])
def create_customer():
    """
    Creates a new user and logs them in
    """
    form = CustomersForm()
    if form.validate_on_submit():
        customer = Customer(
            name=form.data['name'],
            alias=form.data['alias'],
            address=form.data['address'],
            suite=form.data['suite'],
            city=form.data['city'],
            state_or_province=form.data['state'],
            zip=form.data['zip'],
            country=form.data['country'],
            primary_phone=form.data['primary_phone'],
            primary_phone_ext=form.data['primary_phone_ext'],
            secondary_phone=form.data['secondary_phone'],
            secondary_phone_ext=form.data['secondary_phone_ext'],
            site_link=form.data['site_link'],
            industry=form.data['industry'],
            db_num=form.data['db_num'],
            invoice_email=form.data['invoice_email']
        )
        db.session.add(customer)
        db.session.commit()
        return customer.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
