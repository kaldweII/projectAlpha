from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class ContractsForm(FlaskForm):
    type = StringField('type', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    start_date = StringField('start_date', validators=[DataRequired()])
    est_end_date = StringField('est_end_date', validators=[DataRequired()])
    end_date = StringField('end_date')
    status = StringField('status')
    customer = StringField('customer', validators=[DataRequired()])
    sap_account_exec = StringField('sap_account_exec')
    sales_contact = StringField('sales_contact')
    project_manager = StringField('project_manager')
    original_amount = StringField('original_amount')
    billed_amount = StringField('billed_amount')