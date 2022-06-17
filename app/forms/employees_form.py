from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class EmployeesForm(FlaskForm):
    first_name = StringField('first_name', validators=[DataRequired()])
    last_name = StringField('last_name', validators=[DataRequired()])
    alias = StringField('alias')
    role = StringField('role', validators=[DataRequired()])
    country_code = StringField('country_code', validators=[DataRequired()])
    phone_number = StringField('phone_number', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired()])
    linkedin_url = StringField('linkedin_url')
    availability = StringField('availability', validators=[DataRequired()])
    address = StringField('address', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    country = StringField('country', validators=[DataRequired()])
    zipcode = StringField('zipcode', validators=[DataRequired()])
    direct_report = StringField('direct_report')
    employment_start = StringField('employment_start', validators=[DataRequired()])
    employment_end = StringField('employment_end')
    working_status = StringField('working_status')
    recruiter_name = StringField('recruiter_name')
    hourly_rate = StringField('hourly_rate')
    rating = StringField('rating')