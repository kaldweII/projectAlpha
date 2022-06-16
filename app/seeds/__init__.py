from flask.cli import AppGroup
from .users import seed_users, undo_users
from .contacts import seed_contacts, undo_contacts
from .customers import seed_customers, undo_customers
from .contracts import seed_contracts, undo_contracts



# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users(),
    seed_contacts(),
    seed_customers(),
    seed_contracts(),


    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users(),
    undo_contacts(),
    undo_customers(),
    undo_contracts(),


    # Add other undo functions here
