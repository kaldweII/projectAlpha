from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError

class CustomersForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    alias = StringField('alias')
    address = StringField('address', validators=[DataRequired()])
    suite = StringField('suite')
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    zipcode = StringField('zipcode', validators=[DataRequired()])
    country = StringField('country', validators=[DataRequired()])
    country_code = StringField('country_code', validators=[DataRequired()])
    primary_phone = StringField('primary_phone', validators=[DataRequired()])
    primary_phone_extension = StringField('primary_phone_extension')
    secondary_phone = StringField('secondary_phone')
    secondary_phone_extension = StringField('secondary_phone_extension')
    site_link = StringField('site_link')
    industry = StringField('industry', validators=[DataRequired()])
    db_num = StringField('db_num', validators=[DataRequired()])
    invoice_email = StringField('invoice_email', validators=[DataRequired()])