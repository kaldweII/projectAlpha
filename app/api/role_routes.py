from itertools import count
from flask import Blueprint, jsonify, session, request
from app.models import Role, db
from app.forms import RolesForm

role_routes = Blueprint('roles', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
    return errorMessages

@role_routes.route('/', methods=['POST', 'GET'])
def main():
    """
    Creates a new role
    """
    form = RolesForm()
    form['csrf_token'].data = request.cookies['csrf_token']
 
 
    if form.validate_on_submit():
        first_name=form.data['first_name'],
        last_name=form.data['last_name'],
        alias=form.data['alias'],
        role=form.data['role'],
        country_code=form.data['country_code'],
        phone_number=form.data['phone_number'],
        email=form.data['email'],
        linkedin_url=form.data['linkedin_url'],
        availability=form.data['availability'],
        address=form.data['address'],
        city=form.data['city'],
        state=form.data['state'],
        country=form.data['country'],
        zipcode=form.data['zipcode'],
        direct_report=form.data['direct_report'],
        employment_start=form.data['employment_start'],
        employment_end=form.data['employment_end'],
        working_status=form.data['working_status'],
        recruiter_name=form.data['recruiter_name'],
        hourly_rate=form.data['hourly_rate'],
        rating=form.data['rating'],

        new_role = Role(
            first_name=first_name, last_name=last_name, alias=alias,role=role, 
            country_code=country_code,phone_number=phone_number, email=email, linkedin_url=linkedin_url,
            availability=availability, address=address, city=city, state=state, country=country, zipcode=zipcode,
            direct_report=direct_report, employment_start=employment_start, employment_end=employment_end,
            working_status=working_status, recruiter_name=recruiter_name, hourly_rate=hourly_rate, rating=rating,
        )
    
        db.session.add(new_role)
        db.session.commit()
        return new_role.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401