from .db import db
from flask_login import UserMixin
from sqlalchemy.sql import func


class Employee(db.Model, UserMixin):
    __tablename__ = 'employees'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(255), nullable=True)
    last_name = db.Column(db.String(255), nullable=False)
    alias = db.Column(db.String(255), nullable=True)
    role = db.Column(db.String(255), nullable=False)
    country_code = db.Column(db.String(255), nullable=False)
    phone_number = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    linkedin_url = db.Column(db.String(255), nullable=True)
    availability = db.Column(db.String(255), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(255), nullable=False)
    state = db.Column(db.String(255), nullable=False)
    country = db.Column(db.String(255), nullable=False)
    zipcode = db.Column(db.String(255), nullable=False)
    direct_report = db.Column(db.Integer(), nullable=True)
    employment_start = db.Column(db.Date(), nullable=False)
    employment_end = db.Column(db.Date(), nullable=True)
    working_status = db.Column(db.String(255), nullable=True)
    recruiter_name = db.Column(db.String(255), nullable=True)
    hourly_rate = db.Column(db.Float(), nullable=True)
    rating = db.Column(db.Integer, nullable=True)

    def to_dict(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'alias': self.alias,
            'role': self.role,
            'country_code':self.country_code,
            'phone_number':self.phone_number,
            'email':self.email,
            'linkedin_url':self.linkedin_url,
            'availability':self.availability,
            'address':self.address,
            'city':self.city,
            'state':self.state,
            'country':self.country,
            'zipcode':self.zipcode,
            'direct_report':self.direct_report,
            'employment_start':self.employment_start,
            'employment_end':self.employment_end,
            'working_status':self.working_status,
            'recruiter_name':self.recruiter_name,
            'hourly_rate':self.hourly_rate,
            'rating':self.rating,
        }