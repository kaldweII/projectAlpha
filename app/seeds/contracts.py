from app.models import db, Contract


# Adds a demo user, you can add other users here if you want
def seed_contracts():
    contract1 = Contract(
        type='Fixed Fee', description='Test Contract 1', start_date='6/15/2022', est_end_date='9/15/2022', customer=1)
    contract2 = Contract(
        type='T/E', description='Test Contract 2', start_date='8/1/2022', est_end_date='10/1/2022', customer=1)
    contract3 = Contract(
        type='Fixed Fee', description='Test Contract 3', start_date='11/3/2023', est_end_date='1/15/2023', customer=1)
    
    db.session.add(contract1)
    db.session.add(contract2)
    db.session.add(contract3)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_contracts():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

# hi!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!