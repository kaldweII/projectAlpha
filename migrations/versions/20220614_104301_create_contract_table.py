"""create contract table

Revision ID: 3edc37972ba1
Revises: 467533dbdab5
Create Date: 2022-06-14 10:43:01.333982

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3edc37972ba1'
down_revision = '467533dbdab5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('contracts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('type', sa.String(length=255), nullable=True),
    sa.Column('description', sa.String(length=255), nullable=False),
    sa.Column('start_date', sa.Date(), nullable=False),
    sa.Column('est_end_date', sa.Date(), nullable=False),
    sa.Column('end_date', sa.Date(), nullable=True),
    sa.Column('status', sa.String(length=255), nullable=True),
    sa.Column('customer', sa.Integer(), nullable=False),
    sa.Column('sap_account_exec', sa.Integer(), nullable=True),
    sa.Column('sales_contact', sa.Integer(), nullable=True),
    sa.Column('project_manager', sa.Integer(), nullable=True),
    sa.Column('original_amount', sa.Integer(), nullable=True),
    sa.Column('billed_amount', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.alter_column('customers', 'invoice_email',
               existing_type=sa.VARCHAR(length=255),
               nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('customers', 'invoice_email',
               existing_type=sa.VARCHAR(length=255),
               nullable=True)
    op.drop_table('contracts')
    # ### end Alembic commands ###
