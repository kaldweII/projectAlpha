from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Customer

class CustomersForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    alias = StringField('alias')
    address = StringField('address', validators=[DataRequired()])
    suite = StringField('suite')
    city = StringField('city', validators=[DataRequired()])
    state_or_province = StringField('state_or_province', validators=[DataRequired()])
    zip = StringField('zip', validators=[DataRequired()])
    country = StringField('country', validators=[DataRequired()])
    primary_phone = StringField('primary_phone', validators=[DataRequired()])
    primary_phone_ext = StringField('primary_phone_ext', validators=[DataRequired()])
    secondary_phone = StringField('secondary_phone')
    secondary_phone_ext = StringField('secondary_phone_ext')
    site_link = StringField('site_link')
    industry = StringField('industry', validators=[DataRequired()])
    db_num = StringField('db_num', validators=[DataRequired()])
    invoice_email = StringField('invoice_email', validators=[DataRequired()])