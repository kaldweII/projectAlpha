from .db import db
from flask_login import UserMixin
from sqlalchemy.sql import func


class Contact(db.Model, UserMixin):
    __tablename__ = 'contact'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(255), nullable=True, unique=False)
    last_name = db.Column(db.String(255), nullable=False, unique=False)
    email = db.Column(db.String(255), nullable=False)
    gender = db.Column(db.String(255), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    country_code = db.Column(db.String(255), nullable=False)
    mobile_phone_number = db.Column(db.String(255), nullable=False,unique=True )
    office_phone_number = db.Column(db.String(255), nullable=True, unique=True)
    office_phone_extension = db.Column(db.String(255), nullable=True)
    linkedin_url = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, onupdate=func.now())


    def to_dict(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email,
            'gender': self.gender,
            'title':self.title,
            'country_code':self.country_code,
            'mobile_phone_number':self.mobile_phone_number,
            'office_phone_number':self.office_phone_number,
            'office_phone_extension':self.office_phone_extension,
            'primary_phone':self.primary_phone,
            'primary_phone_extension':self.primary_phone_extension,
            'linkedin_url':self.linkedin_url,

        }

        customer = db.relationship("Customer", back_populates="contact")

