"""create customer and contact table

Revision ID: 467533dbdab5
Revises: ffdc0a98111c
Create Date: 2022-06-09 11:39:19.962742

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '467533dbdab5'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('contacts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=255), nullable=True),
    sa.Column('last_name', sa.String(length=255), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('gender', sa.String(length=255), nullable=False),
    sa.Column('title', sa.String(length=255), nullable=False),
    sa.Column('country_code', sa.String(length=255), nullable=False),
    sa.Column('mobile_phone_number', sa.String(length=255), nullable=False),
    sa.Column('office_phone_number', sa.String(length=255), nullable=True),
    sa.Column('office_phone_extension', sa.String(length=255), nullable=True),
    sa.Column('linkedin_url', sa.String(length=255), nullable=True),
    sa.Column('customer', sa.Integer(), nullable=True),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('now()'), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('mobile_phone_number'),
    sa.UniqueConstraint('office_phone_number')
    )
    op.create_table('customers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=True),
    sa.Column('alias', sa.String(length=255), nullable=True),
    sa.Column('address', sa.String(length=255), nullable=False),
    sa.Column('suite', sa.String(length=255), nullable=True),
    sa.Column('city', sa.String(length=255), nullable=False),
    sa.Column('state', sa.String(length=255), nullable=False),
    sa.Column('country', sa.String(length=255), nullable=False),
    sa.Column('zipcode', sa.String(length=255), nullable=False),
    sa.Column('country_code', sa.String(length=255), nullable=False),
    sa.Column('primary_phone', sa.String(length=255), nullable=False),
    sa.Column('primary_phone_extension', sa.String(length=255), nullable=True),
    sa.Column('secondary_phone', sa.String(length=255), nullable=True),
    sa.Column('secondary_phone_extension', sa.String(length=255), nullable=True),
    sa.Column('site_link', sa.String(length=255), nullable=True),
    sa.Column('industry', sa.String(length=255), nullable=False),
    sa.Column('db_num', sa.String(length=255), nullable=True),
    sa.Column('invoice_email', sa.String(length=255), nullable=True),
    sa.Column('main_contact_id', sa.Integer(), nullable=True),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('now()'), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['main_contact_id'], ['contacts.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name'),
    sa.UniqueConstraint('alias'),
    sa.UniqueConstraint('primary_phone'),
    sa.UniqueConstraint('secondary_phone')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('customers')
    op.drop_table('contacts')
    # ### end Alembic commands ###
