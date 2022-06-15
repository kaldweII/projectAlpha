from .db import db
from flask_login import UserMixin
from sqlalchemy.sql import func


class Contract(db.Model, UserMixin):
    __tablename__ = 'contracts'

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(255), nullable=True, unique=False)
    description = db.Column(db.String(255), nullable=False, unique=False)
    start_date = db.Column(db.Date, nullable=False)
    est_end_date = db.Column(db.Date, nullable=False)
    end_date = db.Column(db.Date, nullable=True)
    status = db.Column(db.String(255), nullable=True)
    customer = db.Column(db.Integer, db.ForeignKey('customers.id'), nullable=False)
    sap_account_exec = db.Column(db.Integer, nullable=True)
    sales_contact = db.Column(db.Integer, nullable=True)
    project_manager = db.Column(db.Integer, nullable=True)
    original_amount = db.Column(db.Integer, nullable=True)
    billed_amount = db.Column(db.Integer, nullable=True)


    def to_dict(self):
        return {
            'id': self.id,
            'type': self.type,
            'description': self.description,
            'start_date': self.start_date,
            'est_end_date': self.est_end_date,
            'end_date':self.end_date,
            'status':self.status,
            'customer':self.customer,
            'sap_account_exec':self.sap_account_exec,
            'sales_contact':self.sales_contact,
            'project_manager':self.project_manager,
            'original_amount':self.original_amount,
            'billed_amount':self.billed_amount,
        }