from .db import db
from flask_login import UserMixin
from sqlalchemy.sql import func


class Customer(db.Model, UserMixin):
    __tablename__ = 'customers'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=True, unique=True)
    alias = db.Column(db.String(255), nullable=True, unique=True)
    address = db.Column(db.String(255), nullable=False, unique=False)
    suite = db.Column(db.String(255), nullable=True)
    city = db.Column(db.String(255), nullable=False)
    state = db.Column(db.String(255), nullable=False)
    country = db.Column(db.String(255), nullable=False)
    zipcode = db.Column(db.String(255), nullable=False)
    country_code = db.Column(db.String(255), nullable=False)
    primary_phone = db.Column(db.String(255), nullable=False,unique=True )
    primary_phone_extension = db.Column(db.String(255), nullable=True)
    secondary_phone = db.Column(db.String(255), nullable=True, unique=True)
    secondary_phone_extension = db.Column(db.String(255), nullable=True)
    site_link = db.Column(db.String(255), nullable=True)
    industry = db.Column(db.String(255), nullable=False)
    db_num = db.Column(db.String(255), nullable=True)
    invoice_email = db.Column(db.String(255), nullable=False)
    main_contact_id = db.Column(db.Integer, db.ForeignKey("contacts.id"), nullable=True)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, onupdate=func.now())


    def to_dict(self):
        return {
            'id': self.id,
            'name':self.name,
            'alias': self.alias,
            'address': self.address,
            'suite': self.suite,
            'city':self.city,
            'state':self.state,
            'country':self.country,
            'zipcode':self.zipcode,
            'country_code':self.country_code,
            'primary_phone':self.primary_phone,
            'primary_phone_extension':self.primary_phone_extension,
            'secondary_phone':self.secondary_phone,
            'secondary_phone_extension':self.secondary_phone_extension,
            'site_link':self.site_link,
            'industry':self.industry,
            'db_num':self.db_num,
            'invoice_email':self.invoice_email,
            'main_contact_id':self.main_contact_id,
        }

        contact = db.relationship("Contact", back_populates="customer")

