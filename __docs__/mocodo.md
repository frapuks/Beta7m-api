:
player: id, name, is_goalkeeper
:
shoot: id, is_goal, #shooter > Player > id, #goalkeeper > Player > id, #match_id > Match > id
:
match: id, players_victory
:
:
:
role: id, label
:
user: id, username, first_name, last_name, email, password, avatar, #role_id > Role > id
: