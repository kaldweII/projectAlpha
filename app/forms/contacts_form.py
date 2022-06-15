from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError

class ContactsForm(FlaskForm):
    first_name = StringField('first_name', validators=[DataRequired()])
    last_name = StringField('last_name', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired()])
    gender = StringField('gender', validators=[DataRequired()])
    title = StringField('title', validators=[DataRequired()])
    country_code = StringField('country_code', validators=[DataRequired()])
    mobile_phone_number = StringField('mobile_phone_number', validators=[DataRequired()])
    office_phone_number = StringField('office_phone_number')
    office_phone_extension = StringField('office_phone_extension')
    linkedin_url = StringField('linkedin_url')
    customer = StringField('customer')