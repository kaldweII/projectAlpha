"""create employee table

Revision ID: 74693b99d186
Revises: 3edc37972ba1
Create Date: 2022-06-14 13:48:03.611023

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '74693b99d186'
down_revision = '3edc37972ba1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('employees',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=255), nullable=False),
    sa.Column('last_name', sa.String(length=255), nullable=False),
    sa.Column('alias', sa.String(length=255), nullable=True),
    sa.Column('role', sa.String(length=255), nullable=False),
    sa.Column('country_code', sa.String(length=255), nullable=False),
    sa.Column('phone_number', sa.String(length=255), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('linkedin_url', sa.String(length=255), nullable=True),
    sa.Column('availability', sa.String(length=255), nullable=False),
    sa.Column('address', sa.String(length=255), nullable=False),
    sa.Column('city', sa.String(length=255), nullable=False),
    sa.Column('state', sa.String(length=255), nullable=False),
    sa.Column('country', sa.String(length=255), nullable=False),
    sa.Column('zipcode', sa.String(length=255), nullable=False),
    sa.Column('direct_report', sa.Integer(), nullable=True),
    sa.Column('employment_start', sa.Date(), nullable=False),
    sa.Column('employment_end', sa.Date(), nullable=True),
    sa.Column('working_status', sa.String(length=255), nullable=True),
    sa.Column('recruiter_name', sa.String(length=255), nullable=True),
    sa.Column('hourly_rate', sa.Float(), nullable=True),
    sa.Column('rating', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('employees')
    # ### end Alembic commands ###
