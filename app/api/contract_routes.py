from itertools import count
from flask import Blueprint, jsonify, session, request
from app.models import Contract, db
from app.forms import ContractsForm

contract_routes = Blueprint('contracts', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
    return errorMessages

@contract_routes.route('/', methods=['POST', 'GET'])
def main():
    """
    Creates a new user and logs them in
    """
    form = ContractsForm()
    form['csrf_token'].data = request.cookies['csrf_token']
 
 
    if form.validate_on_submit():
        type=form.data['type'],
        description=form.data['description'],
        start_date=form.data['start_date'],
        est_end_date=form.data['est_end_date'],
        end_date=form.data['end_date'],
        status=form.data['status'],
        customer=form.data['customer'],
        original_amount=form.data['original_amount'],
        billed_amount=form.data['billed_amount'],

        new_contract = Contract(
            type=type, description=description, start_date=start_date,est_end_date=est_end_date, 
            end_date=end_date, status=status, customer=customer, original_amount=original_amount, 
            billed_amount=billed_amount,
        )
    
        db.session.add(new_contract)
        db.session.commit()
        return new_contract.to_dict()
    elif form.errors:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    elif request.method == 'GET':
        contracts = Contract.query.all()
        return {"contracts": [contract.to_dict() for contract in contracts]}