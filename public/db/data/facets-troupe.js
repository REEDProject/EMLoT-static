function getFacetData(){ return [
    "troupe",
    [
        [
            "Event & Person",
            "This category contains facets classifying EMLoT's events and people.",
            [
                [
                    "Event Type",
                    {
                        "t": "s",
                        "q": [
                            "SELECT DISTINCT et.name, tr.id, tr.name",
                            "FROM ltbapp_ass_event_troupes AS iset, ltbapp_troupe AS tr, ltbapp_eventtype AS et, ltbapp_event_event_type AS iseet",
                            "WHERE et.id = iseet.eventtype_id AND tr.id = iset.troupe_id AND iseet.event_id = iset.event_id",
                            "ORDER BY et.name, tr.name"
                        ],
                        "h": "Contains a list that includes types of performance activity and primary sources and other subjects of relevance for London's theatrical world (for example, Plague).",
                        "i": [
                            [
                                "anti-theatrical comment",
                                [
                                    1, 163, 5, 16, 26, 84, 61, 2
                                ]
                            ],
                            [
                                "apprenticeship",
                                [
                                    55
                                ]
                            ],
                            [
                                "arrest",
                                [
                                    1, 157, 148, 52, 139, 137, 61, 12, 14, 2, 124, 9, 3
                                ]
                            ],
                            [
                                "audience context",
                                [
                                    52, 55, 5, 137, 16, 12, 15, 124, 140
                                ]
                            ],
                            [
                                "beargarden business",
                                [
                                    1
                                ]
                            ],
                            [
                                "beargarden context",
                                [
                                    1, 55, 5
                                ]
                            ],
                            [
                                "benefit",
                                [
                                    137
                                ]
                            ],
                            [
                                "bequest",
                                [
                                    52, 5, 137, 61
                                ]
                            ],
                            [
                                "biographical context",
                                [
                                    5
                                ]
                            ],
                            [
                                "burial record",
                                [
                                    163
                                ]
                            ],
                            [
                                "cancelled performance",
                                [
                                    16
                                ]
                            ],
                            [
                                "certificate",
                                [
                                    137
                                ]
                            ],
                            [
                                "commendation",
                                [
                                    5
                                ]
                            ],
                            [
                                "company business",
                                [
                                    1, 52, 139, 7, 111, 8, 122, 130, 55, 158, 150, 103, 145, 5, 137, 57, 16, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 132, 3
                                ]
                            ],
                            [
                                "company context",
                                [
                                    1, 148, 52, 139, 7, 111, 163, 155, 8, 122, 55, 156, 117, 127, 30, 154, 103, 25, 160, 145, 5, 137, 57, 16, 26, 84, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 138, 118, 132, 153, 32, 3
                                ]
                            ],
                            [
                                "company license",
                                [
                                    55
                                ]
                            ],
                            [
                                "company patent",
                                [
                                    52, 122, 55, 5, 137, 16, 62, 4, 14, 15, 3
                                ]
                            ],
                            [
                                "company restraint",
                                [
                                    1, 148, 52, 139, 111, 8, 55, 117, 30, 145, 5, 137, 16, 26, 62, 11, 4, 14, 15, 2, 9, 118, 32, 3
                                ]
                            ],
                            [
                                "correspondence",
                                [
                                    1, 25, 5, 137, 61, 9
                                ]
                            ],
                            [
                                "court case",
                                [
                                    52, 111, 163, 8, 130, 55, 156, 158, 5, 137, 57, 62, 61, 12, 11, 14, 15, 2, 124, 32, 3
                                ]
                            ],
                            [
                                "court performance",
                                [
                                    158, 25, 160
                                ]
                            ],
                            [
                                "cultural context",
                                [
                                    1, 148, 52, 111, 8, 55, 103, 5, 137, 57, 16, 26, 12, 11, 4, 14, 15, 2, 140, 153, 3, 152
                                ]
                            ],
                            [
                                "death",
                                [
                                    163, 5, 62, 11, 4, 14
                                ]
                            ],
                            [
                                "deed",
                                [
                                    1
                                ]
                            ],
                            [
                                "dispute",
                                [
                                    1, 148, 55, 16, 2, 3
                                ]
                            ],
                            [
                                "feast",
                                [
                                    25, 160
                                ]
                            ],
                            [
                                "fire",
                                [
                                    5
                                ]
                            ],
                            [
                                "forgery",
                                [
                                    154, 160
                                ]
                            ],
                            [
                                "illicit performance",
                                [
                                    157, 52, 5, 137, 16, 62, 11, 15, 138
                                ]
                            ],
                            [
                                "inventory",
                                [
                                    1
                                ]
                            ],
                            [
                                "kidnapping",
                                [
                                    8, 57
                                ]
                            ],
                            [
                                "livery grant",
                                [
                                    5, 137, 11, 4, 14, 15
                                ]
                            ],
                            [
                                "lost play",
                                [
                                    137
                                ]
                            ],
                            [
                                "masque",
                                [
                                    25, 160
                                ]
                            ],
                            [
                                "musical performance",
                                [
                                    159
                                ]
                            ],
                            [
                                "patent",
                                [
                                    8, 55, 16, 11
                                ]
                            ],
                            [
                                "payment",
                                [
                                    1, 52, 7, 163, 158, 150, 103, 5, 137, 57, 16, 26, 141, 62, 61, 12, 11, 14, 15, 48, 2, 124, 32, 3, 152
                                ]
                            ],
                            [
                                "performance",
                                [
                                    1, 52, 7, 111, 163, 8, 55, 158, 117, 154, 103, 25, 5, 137, 57, 16, 26, 141, 84, 62, 61, 12, 11, 4, 14, 15, 2, 124, 9, 138, 32, 35, 3, 144
                                ]
                            ],
                            [
                                "performance context",
                                [
                                    1, 52, 159, 7, 111, 163, 8, 55, 30, 154, 150, 103, 25, 160, 5, 137, 16, 26, 61, 12, 15, 2, 124, 9, 118, 132, 32, 3
                                ]
                            ],
                            [
                                "performance license",
                                [
                                    1, 111, 8, 55, 30, 150, 103, 5, 137, 16, 26, 84, 11, 14, 9, 118, 32, 3
                                ]
                            ],
                            [
                                "performance notes",
                                [
                                    163
                                ]
                            ],
                            [
                                "performance restraint",
                                [
                                    1, 52, 139, 111, 8, 30, 145, 5, 137, 16, 26, 84, 61, 12, 15, 2, 140, 118, 161, 32, 3
                                ]
                            ],
                            [
                                "performer context",
                                [
                                    157, 25
                                ]
                            ],
                            [
                                "petition",
                                [
                                    1, 111, 117, 5, 137, 57, 12, 2, 9, 161
                                ]
                            ],
                            [
                                "plague",
                                [
                                    52, 55, 5, 137, 12, 11, 4, 14, 15, 140
                                ]
                            ],
                            [
                                "play censorship",
                                [
                                    52, 139, 5, 137, 16, 62, 61, 12, 11, 15, 124, 140, 153
                                ]
                            ],
                            [
                                "play license",
                                [
                                    52, 111, 5, 137, 16, 62, 12, 11, 15, 48, 124, 140, 138, 153, 3, 152
                                ]
                            ],
                            [
                                "player context",
                                [
                                    1, 148, 52, 111, 8, 55, 117, 127, 5, 137, 57, 16, 26, 84, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 3
                                ]
                            ],
                            [
                                "playhouse business",
                                [
                                    1, 148, 52, 139, 7, 111, 8, 130, 55, 156, 158, 150, 103, 5, 137, 57, 16, 62, 61, 12, 11, 4, 14, 15, 2, 124, 140, 9, 132, 32, 3
                                ]
                            ],
                            [
                                "playhouse context",
                                [
                                    1, 148, 52, 159, 7, 111, 163, 155, 8, 130, 55, 156, 154, 103, 5, 137, 57, 16, 26, 84, 62, 61, 12, 11, 4, 14, 15, 2, 124, 140, 9, 138, 132, 153, 3
                                ]
                            ],
                            [
                                "playhouse restraint",
                                [
                                    1, 148, 52, 111, 5, 137, 62, 61, 11, 14, 15, 2, 9
                                ]
                            ],
                            [
                                "playwright business",
                                [
                                    1, 8
                                ]
                            ],
                            [
                                "playwright context",
                                [
                                    1, 52, 111, 122, 55, 5, 137, 61, 11, 2, 124, 3
                                ]
                            ],
                            [
                                "price list",
                                [
                                    1
                                ]
                            ],
                            [
                                "public disturbance",
                                [
                                    148, 5, 137, 57, 12, 14, 15, 2, 124, 140, 3
                                ]
                            ],
                            [
                                "revival",
                                [
                                    15
                                ]
                            ],
                            [
                                "royal entrance",
                                [
                                    1, 111, 55, 5, 4, 14, 3
                                ]
                            ],
                            [
                                "seizure",
                                [
                                    3
                                ]
                            ],
                            [
                                "sermon",
                                [
                                    163
                                ]
                            ],
                            [
                                "staging context",
                                [
                                    1, 103, 5, 137, 16, 12, 124, 140
                                ]
                            ],
                            [
                                "Stationers' register entry",
                                [
                                    163
                                ]
                            ],
                            [
                                "ticket of privilege",
                                [
                                    137
                                ]
                            ],
                            [
                                "title-page claim",
                                [
                                    1, 111, 163, 155, 8, 55, 156, 117, 5, 137, 57, 16, 84, 61, 11, 4, 14, 15, 2, 124, 9, 132, 3, 144
                                ]
                            ],
                            [
                                "travel warrant",
                                [
                                    137
                                ]
                            ],
                            [
                                "visitation",
                                [
                                    163
                                ]
                            ],
                            [
                                "warrant",
                                [
                                    5, 137, 9
                                ]
                            ],
                            [
                                "wedding",
                                [
                                    25, 160
                                ]
                            ],
                            [
                                "will",
                                [
                                    52, 5, 137, 61
                                ]
                            ]
                        ]
                    }
                ],
                [
                    "Event Date",
                    {
                        "t": "n",
                        "q": [
                            "SELECT DISTINCT ev.devent_from_year, tr.id, tr.name",
                            "FROM ltbapp_ass_event_troupes AS iset, ltbapp_troupe AS tr, ltbapp_event AS ev",
                            "WHERE tr.id = iset.troupe_id AND ev.id = iset.event_id AND ev.devent_from_year Is Not Null",
                            "ORDER BY ev.devent_from_year, tr.name"
                        ],
                        "h": "",
                        "i": [
                            [
                                1378, [
                                    161
                                ]
                            ],
                            [
                                1501, [
                                    141
                                ]
                            ],
                            [
                                1526, [
                                    25
                                ]
                            ],
                            [
                                1557, [
                                    139
                                ]
                            ],
                            [
                                1565, [
                                    25, 160, 35
                                ]
                            ],
                            [
                                1571, [
                                    25
                                ]
                            ],
                            [
                                1576, [
                                    32
                                ]
                            ],
                            [
                                1577, [
                                    32
                                ]
                            ],
                            [
                                1578, [
                                    8, 30, 26, 118, 32
                                ]
                            ],
                            [
                                1579, [
                                    32
                                ]
                            ],
                            [
                                1580, [
                                    26, 32
                                ]
                            ],
                            [
                                1581, [
                                    8
                                ]
                            ],
                            [
                                1583, [
                                    26, 2
                                ]
                            ],
                            [
                                1584, [
                                    148, 2
                                ]
                            ],
                            [
                                1585, [
                                    2
                                ]
                            ],
                            [
                                1586, [
                                    1, 26, 84, 2
                                ]
                            ],
                            [
                                1587, [
                                    25
                                ]
                            ],
                            [
                                1588, [
                                    25
                                ]
                            ],
                            [
                                1589, [
                                    1, 2, 9
                                ]
                            ],
                            [
                                1590, [
                                    1, 9
                                ]
                            ],
                            [
                                1591, [
                                    1, 61, 9
                                ]
                            ],
                            [
                                1592, [
                                    1, 61, 2, 9
                                ]
                            ],
                            [
                                1593, [
                                    1, 7, 14, 2, 124, 9, 132, 3
                                ]
                            ],
                            [
                                1594, [
                                    1, 7, 2
                                ]
                            ],
                            [
                                1595, [
                                    1
                                ]
                            ],
                            [
                                1596, [
                                    1, 117, 25
                                ]
                            ],
                            [
                                1597, [
                                    1, 8, 61
                                ]
                            ],
                            [
                                1598, [
                                    1, 111, 163, 61, 3
                                ]
                            ],
                            [
                                1599, [
                                    1, 111, 163, 137
                                ]
                            ],
                            [
                                1600, [
                                    1, 111, 163, 8, 26, 84, 61, 4
                                ]
                            ],
                            [
                                1601, [
                                    1, 111, 163, 84, 3
                                ]
                            ],
                            [
                                1602, [
                                    1, 111, 163, 8, 84, 3
                                ]
                            ],
                            [
                                1603, [
                                    1, 111, 163, 5, 4, 14, 3
                                ]
                            ],
                            [
                                1604, [
                                    122, 55, 117, 5, 4, 14
                                ]
                            ],
                            [
                                1605, [
                                    55, 5, 11, 14
                                ]
                            ],
                            [
                                1606, [
                                    163, 122, 55, 5, 137, 4, 14
                                ]
                            ],
                            [
                                1607, [
                                    163, 130, 55, 5, 4, 14
                                ]
                            ],
                            [
                                1608, [
                                    163, 122, 130, 5, 137, 4, 14
                                ]
                            ],
                            [
                                1609, [
                                    1, 155, 130, 55, 158, 5, 14, 153
                                ]
                            ],
                            [
                                1610, [
                                    55, 5, 11
                                ]
                            ],
                            [
                                1611, [
                                    55, 5, 16
                                ]
                            ],
                            [
                                1612, [
                                    1, 163, 55, 156, 5, 11, 4, 14, 124
                                ]
                            ],
                            [
                                1613, [
                                    157, 55, 25, 160, 5, 137, 16, 62, 14
                                ]
                            ],
                            [
                                1614, [
                                    163, 5, 16
                                ]
                            ],
                            [
                                1615, [
                                    55, 5, 16, 62, 11, 14, 144
                                ]
                            ],
                            [
                                1616, [
                                    158, 5, 11
                                ]
                            ],
                            [
                                1617, [
                                    5, 137, 11, 14
                                ]
                            ],
                            [
                                1618, [
                                    25, 16, 62, 11
                                ]
                            ],
                            [
                                1619, [
                                    5, 137, 16, 62, 11, 14, 15, 124
                                ]
                            ],
                            [
                                1620, [
                                    5, 11, 124
                                ]
                            ],
                            [
                                1621, [
                                    5, 14, 124
                                ]
                            ],
                            [
                                1622, [
                                    5, 137, 16, 62, 11, 14, 124
                                ]
                            ],
                            [
                                1623, [
                                    111, 5, 16, 62, 11, 14, 15, 48, 124, 138, 153
                                ]
                            ],
                            [
                                1624, [
                                    5, 137, 16, 62, 11, 15
                                ]
                            ],
                            [
                                1625, [
                                    163, 5, 137, 11, 15
                                ]
                            ],
                            [
                                1626, [
                                    5, 137
                                ]
                            ],
                            [
                                1627, [
                                    5, 137, 124
                                ]
                            ],
                            [
                                1628, [
                                    137
                                ]
                            ],
                            [
                                1629, [
                                    154, 150, 5, 137, 57, 15, 140
                                ]
                            ],
                            [
                                1630, [
                                    145, 5, 137, 57, 15, 140
                                ]
                            ],
                            [
                                1631, [
                                    137, 57, 15, 152
                                ]
                            ],
                            [
                                1632, [
                                    163, 5, 137, 57, 12, 15
                                ]
                            ],
                            [
                                1633, [
                                    156, 137, 12, 15
                                ]
                            ],
                            [
                                1634, [
                                    52, 159, 5, 137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                1635, [
                                    52, 8, 103, 5, 137, 57, 12, 15, 2
                                ]
                            ],
                            [
                                1636, [
                                    137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                1637, [
                                    52, 5, 137, 15
                                ]
                            ],
                            [
                                1638, [
                                    52, 137, 12, 15, 140
                                ]
                            ],
                            [
                                1639, [
                                    52, 5, 137, 16, 12, 4, 15, 140
                                ]
                            ],
                            [
                                1640, [
                                    52, 137, 12, 15, 140
                                ]
                            ],
                            [
                                1641, [
                                    52, 127, 137, 12, 15, 48, 140
                                ]
                            ],
                            [
                                1642, [
                                    5, 137, 12, 15
                                ]
                            ],
                            [
                                1646, [
                                    163
                                ]
                            ],
                            [
                                1652, [
                                    5
                                ]
                            ],
                            [
                                1831, [
                                    160
                                ]
                            ]
                        ]
                    }
                ],
                [
                    "Person Surname",
                    {
                        "t": "s",
                        "q": [
                            "SELECT DISTINCT pe.surname, tr.id, tr.name",
                            "FROM ltbapp_ass_event_people AS isep, ltbapp_ass_event_troupes AS iset, ltbapp_person AS pe, ltbapp_troupe AS tr",
                            "WHERE pe.id = isep.person_id AND tr.id = iset.troupe_id AND isep.event_id = iset.event_id",
                            "ORDER BY pe.surname, tr.name"
                        ],
                        "h": "Contains an alphabetical list of surnames of pre-1642 and post-1642 people in EMLoT.",
                        "i": [
                            [
                                "Abbott",
                                [
                                    1
                                ]
                            ],
                            [
                                "Abell",
                                [
                                    12
                                ]
                            ],
                            [
                                "Addison",
                                [
                                    11
                                ]
                            ],
                            [
                                "Adysson",
                                [
                                    9
                                ]
                            ],
                            [
                                "Albone",
                                [
                                    14, 124
                                ]
                            ],
                            [
                                "Allen",
                                [
                                    137, 15
                                ]
                            ],
                            [
                                "Alleyn",
                                [
                                    1, 111, 55, 5, 62, 11, 4, 14, 2, 9
                                ]
                            ],
                            [
                                "Allington",
                                [
                                    137
                                ]
                            ],
                            [
                                "Anderton",
                                [
                                    25
                                ]
                            ],
                            [
                                "Androwes",
                                [
                                    130
                                ]
                            ],
                            [
                                "Archer",
                                [
                                    137
                                ]
                            ],
                            [
                                "Armiger",
                                [
                                    137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                "Armin",
                                [
                                    111, 5, 4, 14
                                ]
                            ],
                            [
                                "Ashley",
                                [
                                    25
                                ]
                            ],
                            [
                                "Astley",
                                [
                                    5, 137, 16, 11, 124
                                ]
                            ],
                            [
                                "Atkins",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "Attwell",
                                [
                                    55, 11
                                ]
                            ],
                            [
                                "Augustine",
                                [
                                    1
                                ]
                            ],
                            [
                                "Axen",
                                [
                                    52, 15
                                ]
                            ],
                            [
                                "Ayton",
                                [
                                    12
                                ]
                            ],
                            [
                                "Babham",
                                [
                                    57
                                ]
                            ],
                            [
                                "Bacon",
                                [
                                    157, 25, 5, 137
                                ]
                            ],
                            [
                                "Bankes",
                                [
                                    12
                                ]
                            ],
                            [
                                "Banks",
                                [
                                    12
                                ]
                            ],
                            [
                                "Barksted",
                                [
                                    55, 16
                                ]
                            ],
                            [
                                "Barne",
                                [
                                    1
                                ]
                            ],
                            [
                                "Barnes",
                                [
                                    11
                                ]
                            ],
                            [
                                "Barry",
                                [
                                    130, 158
                                ]
                            ],
                            [
                                "Baskervile",
                                [
                                    14, 124
                                ]
                            ],
                            [
                                "Baskervile, n\u00e9e Shawe",
                                [
                                    12, 14, 124, 3
                                ]
                            ],
                            [
                                "Basse",
                                [
                                    14, 124
                                ]
                            ],
                            [
                                "Baxter",
                                [
                                    137, 14, 124
                                ]
                            ],
                            [
                                "Baylle",
                                [
                                    1
                                ]
                            ],
                            [
                                "Beaumont",
                                [
                                    5, 137, 14, 15, 140
                                ]
                            ],
                            [
                                "Bedingfield",
                                [
                                    137, 14
                                ]
                            ],
                            [
                                "Beeland",
                                [
                                    137
                                ]
                            ],
                            [
                                "Beeston",
                                [
                                    52, 111, 127, 103, 5, 137, 57, 16, 62, 12, 11, 4, 14, 15, 48, 124, 140
                                ]
                            ],
                            [
                                "Belchen",
                                [
                                    61
                                ]
                            ],
                            [
                                "Bell",
                                [
                                    137
                                ]
                            ],
                            [
                                "Benfield",
                                [
                                    111, 5, 137, 12, 11, 2
                                ]
                            ],
                            [
                                "Bennett",
                                [
                                    5, 137, 4, 14, 124
                                ]
                            ],
                            [
                                "Berry",
                                [
                                    52, 15
                                ]
                            ],
                            [
                                "Bingley",
                                [
                                    137
                                ]
                            ],
                            [
                                "Birch",
                                [
                                    5, 137, 11
                                ]
                            ],
                            [
                                "Bird",
                                [
                                    1, 52, 5, 137, 62, 61, 4, 14, 15
                                ]
                            ],
                            [
                                "Bishop",
                                [
                                    5
                                ]
                            ],
                            [
                                "Black",
                                [
                                    9
                                ]
                            ],
                            [
                                "Blacke",
                                [
                                    3
                                ]
                            ],
                            [
                                "Blackman",
                                [
                                    137
                                ]
                            ],
                            [
                                "Blackwood",
                                [
                                    3
                                ]
                            ],
                            [
                                "Blagrave",
                                [
                                    137, 57, 16, 12, 15
                                ]
                            ],
                            [
                                "Blaney",
                                [
                                    55, 14, 15, 124, 3
                                ]
                            ],
                            [
                                "Bluett",
                                [
                                    5
                                ]
                            ],
                            [
                                "Blunsones",
                                [
                                    61
                                ]
                            ],
                            [
                                "Bodley",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "Bolles",
                                [
                                    5, 14
                                ]
                            ],
                            [
                                "Bond",
                                [
                                    12
                                ]
                            ],
                            [
                                "Bonen",
                                [
                                    16, 62
                                ]
                            ],
                            [
                                "Borne",
                                [
                                    1, 5
                                ]
                            ],
                            [
                                "Bowen",
                                [
                                    137
                                ]
                            ],
                            [
                                "Bower",
                                [
                                    8, 137
                                ]
                            ],
                            [
                                "Bowes",
                                [
                                    52, 127, 137, 12, 15, 48
                                ]
                            ],
                            [
                                "Bowyer",
                                [
                                    137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                "Boyle",
                                [
                                    1
                                ]
                            ],
                            [
                                "Brackenbury",
                                [
                                    163
                                ]
                            ],
                            [
                                "Bramfeld",
                                [
                                    52
                                ]
                            ],
                            [
                                "Brande",
                                [
                                    154
                                ]
                            ],
                            [
                                "Brend",
                                [
                                    5, 137, 2
                                ]
                            ],
                            [
                                "Bretton",
                                [
                                    8
                                ]
                            ],
                            [
                                "Brewe",
                                [
                                    1
                                ]
                            ],
                            [
                                "Brigham",
                                [
                                    62
                                ]
                            ],
                            [
                                "Bristow",
                                [
                                    1
                                ]
                            ],
                            [
                                "Brome",
                                [
                                    52, 5, 62, 12, 11, 15
                                ]
                            ],
                            [
                                "Brookes",
                                [
                                    61
                                ]
                            ],
                            [
                                "Brown",
                                [
                                    5
                                ]
                            ],
                            [
                                "Browne",
                                [
                                    1, 148, 52, 55, 117, 5, 137, 61, 12, 11, 14, 15, 2, 124, 3
                                ]
                            ],
                            [
                                "Bryan",
                                [
                                    111, 5, 9
                                ]
                            ],
                            [
                                "Bryars",
                                [
                                    11
                                ]
                            ],
                            [
                                "Buck",
                                [
                                    5, 62, 11, 4, 14, 124
                                ]
                            ],
                            [
                                "Buckle",
                                [
                                    137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                "Burbage",
                                [
                                    148, 7, 111, 8, 55, 156, 5, 137, 62, 11, 4, 14, 2
                                ]
                            ],
                            [
                                "Burght",
                                [
                                    137
                                ]
                            ],
                            [
                                "Burnett",
                                [
                                    163
                                ]
                            ],
                            [
                                "Burroughes",
                                [
                                    137
                                ]
                            ],
                            [
                                "Burte",
                                [
                                    137
                                ]
                            ],
                            [
                                "Butler",
                                [
                                    137
                                ]
                            ],
                            [
                                "Campion",
                                [
                                    25
                                ]
                            ],
                            [
                                "Cane",
                                [
                                    137, 57, 16, 62, 12, 15, 140
                                ]
                            ],
                            [
                                "Capell",
                                [
                                    137
                                ]
                            ],
                            [
                                "Caper",
                                [
                                    5
                                ]
                            ],
                            [
                                "Carew",
                                [
                                    3
                                ]
                            ],
                            [
                                "Carey",
                                [
                                    1, 148, 111, 55, 5, 11, 4, 14, 2, 3
                                ]
                            ],
                            [
                                "Carlell",
                                [
                                    52, 127, 137, 12, 15, 48
                                ]
                            ],
                            [
                                "Carleton",
                                [
                                    25, 160, 5, 14
                                ]
                            ],
                            [
                                "Carpenter",
                                [
                                    5, 11
                                ]
                            ],
                            [
                                "Carr",
                                [
                                    5
                                ]
                            ],
                            [
                                "Cartwright",
                                [
                                    1, 52, 137, 57, 62, 12, 15, 140
                                ]
                            ],
                            [
                                "Cavendish",
                                [
                                    137
                                ]
                            ],
                            [
                                "Cecil",
                                [
                                    1, 148, 111, 122, 117, 25, 5, 84, 61, 2, 9, 3
                                ]
                            ],
                            [
                                "Challes",
                                [
                                    148, 2
                                ]
                            ],
                            [
                                "Chamberlain",
                                [
                                    25, 160, 5, 14
                                ]
                            ],
                            [
                                "Chambers",
                                [
                                    8, 11, 14, 124
                                ]
                            ],
                            [
                                "Champnes",
                                [
                                    25
                                ]
                            ],
                            [
                                "Chapman",
                                [
                                    1, 111, 163
                                ]
                            ],
                            [
                                "Chappell",
                                [
                                    8
                                ]
                            ],
                            [
                                "Chettle",
                                [
                                    1, 111, 3
                                ]
                            ],
                            [
                                "Chiswell",
                                [
                                    137
                                ]
                            ],
                            [
                                "Christofer",
                                [
                                    14
                                ]
                            ],
                            [
                                "Clarke",
                                [
                                    137, 57, 12, 14, 15, 124, 140
                                ]
                            ],
                            [
                                "Clayton",
                                [
                                    62
                                ]
                            ],
                            [
                                "Clewett",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "Clifton",
                                [
                                    8, 12, 140
                                ]
                            ],
                            [
                                "Codbolt",
                                [
                                    163
                                ]
                            ],
                            [
                                "Colborne",
                                [
                                    62, 4
                                ]
                            ],
                            [
                                "Coles",
                                [
                                    163
                                ]
                            ],
                            [
                                "Collins",
                                [
                                    137
                                ]
                            ],
                            [
                                "Coloma",
                                [
                                    5
                                ]
                            ],
                            [
                                "Condell",
                                [
                                    111, 8, 55, 5, 137, 11
                                ]
                            ],
                            [
                                "Conway",
                                [
                                    5
                                ]
                            ],
                            [
                                "Cook",
                                [
                                    55
                                ]
                            ],
                            [
                                "Cooke",
                                [
                                    111, 130, 55, 158, 5, 61, 12
                                ]
                            ],
                            [
                                "Cotton",
                                [
                                    152
                                ]
                            ],
                            [
                                "Cowley",
                                [
                                    111, 5, 4, 14
                                ]
                            ],
                            [
                                "Cox",
                                [
                                    52
                                ]
                            ],
                            [
                                "Cranwigge",
                                [
                                    1
                                ]
                            ],
                            [
                                "Craven",
                                [
                                    5
                                ]
                            ],
                            [
                                "Cressey",
                                [
                                    5
                                ]
                            ],
                            [
                                "Crome",
                                [
                                    12
                                ]
                            ],
                            [
                                "Cromes",
                                [
                                    12
                                ]
                            ],
                            [
                                "Crosfield",
                                [
                                    137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                "Crosse",
                                [
                                    111, 163, 5
                                ]
                            ],
                            [
                                "Crwe",
                                [
                                    25
                                ]
                            ],
                            [
                                "Cumber",
                                [
                                    11, 14, 124
                                ]
                            ],
                            [
                                "Curtis",
                                [
                                    139
                                ]
                            ],
                            [
                                "d'Avenant",
                                [
                                    52, 137
                                ]
                            ],
                            [
                                "Daborne",
                                [
                                    55, 16
                                ]
                            ],
                            [
                                "Daniel",
                                [
                                    55, 137, 14
                                ]
                            ],
                            [
                                "Darcey",
                                [
                                    55
                                ]
                            ],
                            [
                                "Davenport",
                                [
                                    52, 25, 5, 15
                                ]
                            ],
                            [
                                "Daves",
                                [
                                    2
                                ]
                            ],
                            [
                                "Dawes",
                                [
                                    55, 5, 16
                                ]
                            ],
                            [
                                "Dawson",
                                [
                                    163
                                ]
                            ],
                            [
                                "Day",
                                [
                                    1, 5, 62, 11, 14, 15, 138, 3
                                ]
                            ],
                            [
                                "Daye",
                                [
                                    25
                                ]
                            ],
                            [
                                "de Acu\u00f1a",
                                [
                                    25, 160
                                ]
                            ],
                            [
                                "de Caron",
                                [
                                    25, 160
                                ]
                            ],
                            [
                                "de Guzm\u00e1n",
                                [
                                    5
                                ]
                            ],
                            [
                                "de Ligne",
                                [
                                    14
                                ]
                            ],
                            [
                                "de Vere",
                                [
                                    1, 111, 117, 84, 3
                                ]
                            ],
                            [
                                "de Zuniga",
                                [
                                    122
                                ]
                            ],
                            [
                                "Dekker",
                                [
                                    1, 16, 62, 11, 4, 14, 124, 3
                                ]
                            ],
                            [
                                "Denham",
                                [
                                    137
                                ]
                            ],
                            [
                                "Dickens",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "Digges",
                                [
                                    137, 12
                                ]
                            ],
                            [
                                "Ditcher",
                                [
                                    137
                                ]
                            ],
                            [
                                "Dover",
                                [
                                    137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                "Dowet",
                                [
                                    9
                                ]
                            ],
                            [
                                "Dowle",
                                [
                                    137
                                ]
                            ],
                            [
                                "Downton",
                                [
                                    1, 111, 5, 62, 61, 4, 14
                                ]
                            ],
                            [
                                "Drayton",
                                [
                                    1, 130
                                ]
                            ],
                            [
                                "Drew",
                                [
                                    11, 4
                                ]
                            ],
                            [
                                "Drewe",
                                [
                                    14, 124
                                ]
                            ],
                            [
                                "Drue",
                                [
                                    62
                                ]
                            ],
                            [
                                "Duke",
                                [
                                    111, 5, 11, 4, 14, 3
                                ]
                            ],
                            [
                                "Dutton",
                                [
                                    1, 32
                                ]
                            ],
                            [
                                "Dyot",
                                [
                                    14
                                ]
                            ],
                            [
                                "Dyson",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "Earle",
                                [
                                    12
                                ]
                            ],
                            [
                                "Ecclestone",
                                [
                                    111, 55, 5, 16
                                ]
                            ],
                            [
                                "Edgill",
                                [
                                    124
                                ]
                            ],
                            [
                                "Edmonds",
                                [
                                    14
                                ]
                            ],
                            [
                                "Edward",
                                [
                                    8
                                ]
                            ],
                            [
                                "Edwards",
                                [
                                    8, 130
                                ]
                            ],
                            [
                                "Egerton",
                                [
                                    55, 5, 3
                                ]
                            ],
                            [
                                "Ellesden",
                                [
                                    11
                                ]
                            ],
                            [
                                "Ellis",
                                [
                                    25
                                ]
                            ],
                            [
                                "Evans",
                                [
                                    8, 55, 156, 5, 137
                                ]
                            ],
                            [
                                "Farnley",
                                [
                                    25
                                ]
                            ],
                            [
                                "Farrant",
                                [
                                    8
                                ]
                            ],
                            [
                                "Feilding",
                                [
                                    15
                                ]
                            ],
                            [
                                "Fenn",
                                [
                                    52, 15
                                ]
                            ],
                            [
                                "Fennor",
                                [
                                    16
                                ]
                            ],
                            [
                                "Ferrys",
                                [
                                    61
                                ]
                            ],
                            [
                                "Field",
                                [
                                    111, 8, 55, 5, 137, 16
                                ]
                            ],
                            [
                                "Finch",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "Finnett",
                                [
                                    137
                                ]
                            ],
                            [
                                "Fisher",
                                [
                                    137, 62
                                ]
                            ],
                            [
                                "Flaskett",
                                [
                                    163
                                ]
                            ],
                            [
                                "Fleetwood",
                                [
                                    148, 2
                                ]
                            ],
                            [
                                "Fleming",
                                [
                                    55, 156, 5
                                ]
                            ],
                            [
                                "Fletcher",
                                [
                                    1, 5, 137, 61, 4, 14, 15
                                ]
                            ],
                            [
                                "Ford",
                                [
                                    1, 52, 16, 62, 11
                                ]
                            ],
                            [
                                "Fortescue",
                                [
                                    1, 111, 8, 84, 3
                                ]
                            ],
                            [
                                "Foscarini",
                                [
                                    25, 160
                                ]
                            ],
                            [
                                "Fouch",
                                [
                                    12
                                ]
                            ],
                            [
                                "Fowler",
                                [
                                    137, 62, 12
                                ]
                            ],
                            [
                                "Garfield",
                                [
                                    11
                                ]
                            ],
                            [
                                "Garland",
                                [
                                    1
                                ]
                            ],
                            [
                                "Garrard",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "Garratt",
                                [
                                    1
                                ]
                            ],
                            [
                                "Garrell",
                                [
                                    62
                                ]
                            ],
                            [
                                "Garruld",
                                [
                                    1
                                ]
                            ],
                            [
                                "Gary",
                                [
                                    55
                                ]
                            ],
                            [
                                "Gateward",
                                [
                                    1
                                ]
                            ],
                            [
                                "Gedion",
                                [
                                    1
                                ]
                            ],
                            [
                                "Gell",
                                [
                                    137
                                ]
                            ],
                            [
                                "George",
                                [
                                    5
                                ]
                            ],
                            [
                                "Gibbes",
                                [
                                    1
                                ]
                            ],
                            [
                                "Gibbs",
                                [
                                    1, 52, 137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                "Gilburne",
                                [
                                    111, 5
                                ]
                            ],
                            [
                                "Giles",
                                [
                                    163, 8, 122
                                ]
                            ],
                            [
                                "Gill",
                                [
                                    124
                                ]
                            ],
                            [
                                "Glapthorne",
                                [
                                    52, 137
                                ]
                            ],
                            [
                                "Goade",
                                [
                                    52, 137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                "Godman",
                                [
                                    137
                                ]
                            ],
                            [
                                "Godwin",
                                [
                                    12
                                ]
                            ],
                            [
                                "Goldsmith",
                                [
                                    14
                                ]
                            ],
                            [
                                "Goode",
                                [
                                    1
                                ]
                            ],
                            [
                                "Gough",
                                [
                                    111, 5
                                ]
                            ],
                            [
                                "Gough ",
                                [
                                    137
                                ]
                            ],
                            [
                                "Grace",
                                [
                                    62, 4
                                ]
                            ],
                            [
                                "Gradwell",
                                [
                                    12
                                ]
                            ],
                            [
                                "Greene",
                                [
                                    1, 5, 4, 14, 2, 124, 3
                                ]
                            ],
                            [
                                "Gregory",
                                [
                                    1
                                ]
                            ],
                            [
                                "Gresley",
                                [
                                    57
                                ]
                            ],
                            [
                                "Greville",
                                [
                                    52, 5, 137, 57, 16, 62, 12, 15, 140
                                ]
                            ],
                            [
                                "Griffin",
                                [
                                    55, 16
                                ]
                            ],
                            [
                                "Grymes",
                                [
                                    8
                                ]
                            ],
                            [
                                "Guilpin",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "Gunnell",
                                [
                                    52, 8, 137, 57, 16, 62, 12, 15, 140
                                ]
                            ],
                            [
                                "Gurney",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "Gwalter",
                                [
                                    62
                                ]
                            ],
                            [
                                "Gylles",
                                [
                                    25
                                ]
                            ],
                            [
                                "Gymber",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "Gyrdler",
                                [
                                    163
                                ]
                            ],
                            [
                                "Habington",
                                [
                                    137
                                ]
                            ],
                            [
                                "Hackleton",
                                [
                                    11
                                ]
                            ],
                            [
                                "Haines",
                                [
                                    52
                                ]
                            ],
                            [
                                "Hall",
                                [
                                    12
                                ]
                            ],
                            [
                                "Hamerton",
                                [
                                    12
                                ]
                            ],
                            [
                                "Hamlen",
                                [
                                    5, 11
                                ]
                            ],
                            [
                                "Hammerton",
                                [
                                    137, 57
                                ]
                            ],
                            [
                                "Hancock",
                                [
                                    137
                                ]
                            ],
                            [
                                "Hanley",
                                [
                                    137
                                ]
                            ],
                            [
                                "Harris",
                                [
                                    61
                                ]
                            ],
                            [
                                "Hart",
                                [
                                    1, 137, 9
                                ]
                            ],
                            [
                                "Haslette",
                                [
                                    1
                                ]
                            ],
                            [
                                "Hatelyff",
                                [
                                    25
                                ]
                            ],
                            [
                                "Hatton",
                                [
                                    148, 2
                                ]
                            ],
                            [
                                "Hattrell",
                                [
                                    11
                                ]
                            ],
                            [
                                "Haughton",
                                [
                                    1
                                ]
                            ],
                            [
                                "Haulte",
                                [
                                    14
                                ]
                            ],
                            [
                                "Hawkins",
                                [
                                    8, 55, 156, 5
                                ]
                            ],
                            [
                                "Hawley",
                                [
                                    137
                                ]
                            ],
                            [
                                "Hayes",
                                [
                                    5
                                ]
                            ],
                            [
                                "Hearne",
                                [
                                    1
                                ]
                            ],
                            [
                                "Helle",
                                [
                                    1
                                ]
                            ],
                            [
                                "Heminges",
                                [
                                    111, 8, 55, 156, 5, 137, 11, 4, 14, 2, 124, 9
                                ]
                            ],
                            [
                                "Henry",
                                [
                                    8
                                ]
                            ],
                            [
                                "Henslowe",
                                [
                                    1, 7, 111, 55, 16, 61, 4, 2, 9, 132, 3
                                ]
                            ],
                            [
                                "Herbert",
                                [
                                    1, 52, 111, 122, 127, 150, 103, 160, 5, 137, 57, 16, 84, 62, 61, 12, 11, 15, 48, 124, 140, 138, 153, 3, 152
                                ]
                            ],
                            [
                                "Heton",
                                [
                                    52, 57, 12, 15
                                ]
                            ],
                            [
                                "Hewlett",
                                [
                                    1
                                ]
                            ],
                            [
                                "Heywood",
                                [
                                    1, 111, 5, 16, 11, 4, 14, 124, 3
                                ]
                            ],
                            [
                                "Hickes",
                                [
                                    32
                                ]
                            ],
                            [
                                "Hilder",
                                [
                                    4
                                ]
                            ],
                            [
                                "Hitchens",
                                [
                                    1
                                ]
                            ],
                            [
                                "Hobbes",
                                [
                                    5, 137, 11
                                ]
                            ],
                            [
                                "Hodskyns",
                                [
                                    11
                                ]
                            ],
                            [
                                "Holcombe",
                                [
                                    5, 137, 2
                                ]
                            ],
                            [
                                "Holland",
                                [
                                    14
                                ]
                            ],
                            [
                                "Holles",
                                [
                                    5
                                ]
                            ],
                            [
                                "Holt",
                                [
                                    5, 4, 14
                                ]
                            ],
                            [
                                "Honingborne",
                                [
                                    32
                                ]
                            ],
                            [
                                "Honyman",
                                [
                                    5, 137, 12, 2
                                ]
                            ],
                            [
                                "Horne",
                                [
                                    5, 137, 11
                                ]
                            ],
                            [
                                "Howard",
                                [
                                    1, 148, 111, 5, 84, 62, 4, 14, 2, 9, 3
                                ]
                            ],
                            [
                                "Howe",
                                [
                                    163
                                ]
                            ],
                            [
                                "Hudson",
                                [
                                    137
                                ]
                            ],
                            [
                                "Hulton",
                                [
                                    25
                                ]
                            ],
                            [
                                "Hunnis",
                                [
                                    8, 5, 4, 14
                                ]
                            ],
                            [
                                "Hunt",
                                [
                                    1, 5, 137
                                ]
                            ],
                            [
                                "Hutton",
                                [
                                    5
                                ]
                            ],
                            [
                                "Huyt",
                                [
                                    12
                                ]
                            ],
                            [
                                "Ireland",
                                [
                                    11
                                ]
                            ],
                            [
                                "Isham",
                                [
                                    5
                                ]
                            ],
                            [
                                "Islipp",
                                [
                                    62
                                ]
                            ],
                            [
                                "Ives",
                                [
                                    159
                                ]
                            ],
                            [
                                "Jackson",
                                [
                                    62
                                ]
                            ],
                            [
                                "Jarman",
                                [
                                    62
                                ]
                            ],
                            [
                                "Jarmonger",
                                [
                                    9
                                ]
                            ],
                            [
                                "Jeffes",
                                [
                                    1, 5, 62, 4, 14
                                ]
                            ],
                            [
                                "Jenkins",
                                [
                                    137
                                ]
                            ],
                            [
                                "Jermyn",
                                [
                                    137
                                ]
                            ],
                            [
                                "Jewell",
                                [
                                    61
                                ]
                            ],
                            [
                                "Jobber",
                                [
                                    158
                                ]
                            ],
                            [
                                "Johnson",
                                [
                                    1
                                ]
                            ],
                            [
                                "Jones",
                                [
                                    1, 55, 137, 16, 61, 11
                                ]
                            ],
                            [
                                "Jonson",
                                [
                                    1, 111, 5, 137, 61, 12, 11, 15, 140
                                ]
                            ],
                            [
                                "Jordan",
                                [
                                    14, 124, 140
                                ]
                            ],
                            [
                                "Juby",
                                [
                                    1, 111, 5, 62, 61, 4, 14
                                ]
                            ],
                            [
                                "Kele",
                                [
                                    5
                                ]
                            ],
                            [
                                "Kemp",
                                [
                                    7, 111, 5, 137, 26, 9, 3
                                ]
                            ],
                            [
                                "Kendall",
                                [
                                    8, 55, 156, 5, 137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                "Kenede",
                                [
                                    163
                                ]
                            ],
                            [
                                "Keysar",
                                [
                                    55, 158, 5
                                ]
                            ],
                            [
                                "Killigrew",
                                [
                                    14
                                ]
                            ],
                            [
                                "King",
                                [
                                    14, 124, 3
                                ]
                            ],
                            [
                                "Kingman",
                                [
                                    55, 16, 11
                                ]
                            ],
                            [
                                "Kirk",
                                [
                                    52
                                ]
                            ],
                            [
                                "Kirke",
                                [
                                    137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                "Kirkham",
                                [
                                    8, 55, 156, 5, 4, 14
                                ]
                            ],
                            [
                                "Knight",
                                [
                                    137
                                ]
                            ],
                            [
                                "Knollys",
                                [
                                    1, 111, 5, 84, 4, 14, 3
                                ]
                            ],
                            [
                                "Lacy",
                                [
                                    52
                                ]
                            ],
                            [
                                "Lake",
                                [
                                    122, 55, 16, 11
                                ]
                            ],
                            [
                                "Lancaster",
                                [
                                    12
                                ]
                            ],
                            [
                                "Lane",
                                [
                                    137
                                ]
                            ],
                            [
                                "Laneham",
                                [
                                    2
                                ]
                            ],
                            [
                                "Langhorne",
                                [
                                    8
                                ]
                            ],
                            [
                                "Langley",
                                [
                                    1, 5, 137, 61, 3
                                ]
                            ],
                            [
                                "Le Fevure",
                                [
                                    103
                                ]
                            ],
                            [
                                "Leadbetter",
                                [
                                    1
                                ]
                            ],
                            [
                                "Lee",
                                [
                                    1, 111, 5, 84, 4, 14, 124, 3
                                ]
                            ],
                            [
                                "Lehuc",
                                [
                                    137
                                ]
                            ],
                            [
                                "Levison",
                                [
                                    5
                                ]
                            ],
                            [
                                "Lewes",
                                [
                                    1
                                ]
                            ],
                            [
                                "Lewknor",
                                [
                                    11
                                ]
                            ],
                            [
                                "Lightmaker",
                                [
                                    5
                                ]
                            ],
                            [
                                "Lord",
                                [
                                    14
                                ]
                            ],
                            [
                                "Lorkin",
                                [
                                    5
                                ]
                            ],
                            [
                                "Lowin",
                                [
                                    52, 111, 5, 137, 57, 12, 11, 15, 140, 3
                                ]
                            ],
                            [
                                "Luttrell",
                                [
                                    25
                                ]
                            ],
                            [
                                "Magett",
                                [
                                    1
                                ]
                            ],
                            [
                                "Mago",
                                [
                                    3
                                ]
                            ],
                            [
                                "Mainwaringe",
                                [
                                    137
                                ]
                            ],
                            [
                                "Mannery",
                                [
                                    52, 12
                                ]
                            ],
                            [
                                "Mansell",
                                [
                                    163
                                ]
                            ],
                            [
                                "Marbeck",
                                [
                                    1
                                ]
                            ],
                            [
                                "Marlowe",
                                [
                                    1
                                ]
                            ],
                            [
                                "Marsh",
                                [
                                    3
                                ]
                            ],
                            [
                                "Marshall",
                                [
                                    5
                                ]
                            ],
                            [
                                "Marston",
                                [
                                    1, 55
                                ]
                            ],
                            [
                                "Martin",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "Mason",
                                [
                                    130, 158
                                ]
                            ],
                            [
                                "Massey",
                                [
                                    1, 5, 62, 4, 14
                                ]
                            ],
                            [
                                "Massinger",
                                [
                                    137, 16, 12, 15, 48, 124
                                ]
                            ],
                            [
                                "Matthewes",
                                [
                                    61
                                ]
                            ],
                            [
                                "Maunsell",
                                [
                                    137
                                ]
                            ],
                            [
                                "May",
                                [
                                    52, 12, 15
                                ]
                            ],
                            [
                                "Meade",
                                [
                                    55, 16, 11
                                ]
                            ],
                            [
                                "Merrick",
                                [
                                    111
                                ]
                            ],
                            [
                                "Middleton",
                                [
                                    1, 5, 137, 4, 14
                                ]
                            ],
                            [
                                "Miles",
                                [
                                    137
                                ]
                            ],
                            [
                                "Milward",
                                [
                                    163
                                ]
                            ],
                            [
                                "Mohun",
                                [
                                    52
                                ]
                            ],
                            [
                                "Montagu",
                                [
                                    5
                                ]
                            ],
                            [
                                "Montague",
                                [
                                    122, 137
                                ]
                            ],
                            [
                                "Montfort",
                                [
                                    25
                                ]
                            ],
                            [
                                "Moore",
                                [
                                    16, 12
                                ]
                            ],
                            [
                                "More",
                                [
                                    1, 8
                                ]
                            ],
                            [
                                "Morecroft",
                                [
                                    5, 137, 2
                                ]
                            ],
                            [
                                "Morgan",
                                [
                                    137
                                ]
                            ],
                            [
                                "Morris",
                                [
                                    137
                                ]
                            ],
                            [
                                "Motteram",
                                [
                                    8
                                ]
                            ],
                            [
                                "Mulcaster",
                                [
                                    8
                                ]
                            ],
                            [
                                "Munday",
                                [
                                    1
                                ]
                            ],
                            [
                                "Murray",
                                [
                                    137
                                ]
                            ],
                            [
                                "Napper",
                                [
                                    55, 156, 5
                                ]
                            ],
                            [
                                "Nashe",
                                [
                                    61
                                ]
                            ],
                            [
                                "Nethersole",
                                [
                                    5
                                ]
                            ],
                            [
                                "Newton",
                                [
                                    5, 11
                                ]
                            ],
                            [
                                "Nicholl",
                                [
                                    1
                                ]
                            ],
                            [
                                "Nore",
                                [
                                    12
                                ]
                            ],
                            [
                                "Norris",
                                [
                                    1
                                ]
                            ],
                            [
                                "Norwood",
                                [
                                    163
                                ]
                            ],
                            [
                                "of Denmark",
                                [
                                    1, 111, 163, 55, 25, 160, 5, 62, 11, 4, 14, 3
                                ]
                            ],
                            [
                                "of France",
                                [
                                    159, 103, 160, 137, 15
                                ]
                            ],
                            [
                                "Osborne",
                                [
                                    1
                                ]
                            ],
                            [
                                "Ostler",
                                [
                                    111, 8, 5, 137
                                ]
                            ],
                            [
                                "Overton",
                                [
                                    5
                                ]
                            ],
                            [
                                "Page",
                                [
                                    52, 137, 15
                                ]
                            ],
                            [
                                "Pagett",
                                [
                                    160
                                ]
                            ],
                            [
                                "Pakenham",
                                [
                                    5, 4, 14
                                ]
                            ],
                            [
                                "Pallant",
                                [
                                    55, 5, 16, 4, 14
                                ]
                            ],
                            [
                                "Parr",
                                [
                                    1, 62, 4
                                ]
                            ],
                            [
                                "Parrish",
                                [
                                    5
                                ]
                            ],
                            [
                                "Parson",
                                [
                                    62
                                ]
                            ],
                            [
                                "Parsons",
                                [
                                    1
                                ]
                            ],
                            [
                                "Patrick",
                                [
                                    163, 137
                                ]
                            ],
                            [
                                "Paunton",
                                [
                                    55
                                ]
                            ],
                            [
                                "Pavy",
                                [
                                    8
                                ]
                            ],
                            [
                                "Payne",
                                [
                                    55, 137, 14
                                ]
                            ],
                            [
                                "Pearce",
                                [
                                    163
                                ]
                            ],
                            [
                                "Pedel",
                                [
                                    62
                                ]
                            ],
                            [
                                "Peerce",
                                [
                                    8
                                ]
                            ],
                            [
                                "Peers",
                                [
                                    163
                                ]
                            ],
                            [
                                "Pendry",
                                [
                                    163
                                ]
                            ],
                            [
                                "Peniston",
                                [
                                    25
                                ]
                            ],
                            [
                                "Penkethman",
                                [
                                    14
                                ]
                            ],
                            [
                                "Penn",
                                [
                                    55, 5, 137, 11
                                ]
                            ],
                            [
                                "Pennycuicke",
                                [
                                    5
                                ]
                            ],
                            [
                                "Percy",
                                [
                                    111
                                ]
                            ],
                            [
                                "Perkins",
                                [
                                    52, 5, 11, 4, 14, 15, 124, 3
                                ]
                            ],
                            [
                                "Perry",
                                [
                                    57, 140
                                ]
                            ],
                            [
                                "Pettingham",
                                [
                                    137
                                ]
                            ],
                            [
                                "Phelips",
                                [
                                    156
                                ]
                            ],
                            [
                                "Phillips",
                                [
                                    111, 8, 5, 137, 4, 14, 9
                                ]
                            ],
                            [
                                "Pierce",
                                [
                                    55
                                ]
                            ],
                            [
                                "Plantaganet",
                                [
                                    161
                                ]
                            ],
                            [
                                "Playne",
                                [
                                    9
                                ]
                            ],
                            [
                                "Plumfield",
                                [
                                    12
                                ]
                            ],
                            [
                                "Poleston",
                                [
                                    3
                                ]
                            ],
                            [
                                "Pollard",
                                [
                                    5, 137, 12, 11, 2
                                ]
                            ],
                            [
                                "Pope",
                                [
                                    1, 111, 5, 137, 9
                                ]
                            ],
                            [
                                "Porter",
                                [
                                    1, 111, 61
                                ]
                            ],
                            [
                                "Portman",
                                [
                                    137
                                ]
                            ],
                            [
                                "Pory",
                                [
                                    137
                                ]
                            ],
                            [
                                "Powell",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "Price",
                                [
                                    62, 11, 4
                                ]
                            ],
                            [
                                "Puckering",
                                [
                                    5, 57
                                ]
                            ],
                            [
                                "Pulham",
                                [
                                    14, 124
                                ]
                            ],
                            [
                                "Pykman",
                                [
                                    8
                                ]
                            ],
                            [
                                "Pype",
                                [
                                    8, 30, 26, 118, 32
                                ]
                            ],
                            [
                                "Pytcher",
                                [
                                    163
                                ]
                            ],
                            [
                                "Radcliffe",
                                [
                                    1, 111
                                ]
                            ],
                            [
                                "Rastell",
                                [
                                    8, 55, 156, 5
                                ]
                            ],
                            [
                                "Rauiscrofte",
                                [
                                    163
                                ]
                            ],
                            [
                                "Reade",
                                [
                                    52, 137, 57, 12, 14, 15, 124, 140
                                ]
                            ],
                            [
                                "Reason",
                                [
                                    5, 11
                                ]
                            ],
                            [
                                "Reeve",
                                [
                                    55, 16, 11
                                ]
                            ],
                            [
                                "Remys",
                                [
                                    1
                                ]
                            ],
                            [
                                "Restor",
                                [
                                    1
                                ]
                            ],
                            [
                                "Reues",
                                [
                                    1
                                ]
                            ],
                            [
                                "Reynolds",
                                [
                                    14, 15, 124
                                ]
                            ],
                            [
                                "Rhodes",
                                [
                                    25, 137, 12
                                ]
                            ],
                            [
                                "Rice",
                                [
                                    111, 5, 137, 11
                                ]
                            ],
                            [
                                "Rich",
                                [
                                    25, 160
                                ]
                            ],
                            [
                                "Robbins",
                                [
                                    137, 57, 12, 14, 15, 124, 140
                                ]
                            ],
                            [
                                "Roberts",
                                [
                                    137
                                ]
                            ],
                            [
                                "Robins",
                                [
                                    137
                                ]
                            ],
                            [
                                "Robinson",
                                [
                                    52, 111, 8, 5, 137, 57, 12, 11, 15, 140
                                ]
                            ],
                            [
                                "Robson",
                                [
                                    1
                                ]
                            ],
                            [
                                "Rogers",
                                [
                                    15
                                ]
                            ],
                            [
                                "Roper",
                                [
                                    137
                                ]
                            ],
                            [
                                "Ross",
                                [
                                    25
                                ]
                            ],
                            [
                                "Rosseter",
                                [
                                    55, 5, 16, 11
                                ]
                            ],
                            [
                                "Rowe",
                                [
                                    25
                                ]
                            ],
                            [
                                "Rowley",
                                [
                                    1, 5, 137, 62, 11, 4, 14
                                ]
                            ],
                            [
                                "Russell",
                                [
                                    1, 62, 9
                                ]
                            ],
                            [
                                "Ryves",
                                [
                                    5
                                ]
                            ],
                            [
                                "Sackville",
                                [
                                    1, 111, 130, 57, 84, 15, 3
                                ]
                            ],
                            [
                                "Sage",
                                [
                                    137
                                ]
                            ],
                            [
                                "Salisbury",
                                [
                                    5
                                ]
                            ],
                            [
                                "Salvetti",
                                [
                                    5
                                ]
                            ],
                            [
                                "Sampson",
                                [
                                    11
                                ]
                            ],
                            [
                                "Samwell",
                                [
                                    3
                                ]
                            ],
                            [
                                "Sanders",
                                [
                                    55, 5, 16, 11
                                ]
                            ],
                            [
                                "Sanderson",
                                [
                                    5, 137, 14
                                ]
                            ],
                            [
                                "Sandfort",
                                [
                                    25
                                ]
                            ],
                            [
                                "Sands",
                                [
                                    5
                                ]
                            ],
                            [
                                "Sanford",
                                [
                                    5
                                ]
                            ],
                            [
                                "Saunders",
                                [
                                    55, 11
                                ]
                            ],
                            [
                                "Savage",
                                [
                                    5, 11, 32
                                ]
                            ],
                            [
                                "Savill",
                                [
                                    12
                                ]
                            ],
                            [
                                "Scott",
                                [
                                    61
                                ]
                            ],
                            [
                                "Scudamore",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "Segood",
                                [
                                    137
                                ]
                            ],
                            [
                                "Sewster",
                                [
                                    12
                                ]
                            ],
                            [
                                "Shakerley",
                                [
                                    25, 15
                                ]
                            ],
                            [
                                "Shakespeare",
                                [
                                    7, 111, 8, 5, 137, 12, 4, 14, 124
                                ]
                            ],
                            [
                                "Shank",
                                [
                                    111, 5, 137, 62, 12, 11, 4, 2
                                ]
                            ],
                            [
                                "Sharpe",
                                [
                                    5, 137, 11
                                ]
                            ],
                            [
                                "Sharpham",
                                [
                                    130
                                ]
                            ],
                            [
                                "Shatterell",
                                [
                                    52
                                ]
                            ],
                            [
                                "Shaw",
                                [
                                    1, 111, 61
                                ]
                            ],
                            [
                                "Shepheard",
                                [
                                    52, 137
                                ]
                            ],
                            [
                                "Shepherd",
                                [
                                    5
                                ]
                            ],
                            [
                                "Sheppard",
                                [
                                    137
                                ]
                            ],
                            [
                                "Sherburne",
                                [
                                    14
                                ]
                            ],
                            [
                                "Sherlocke",
                                [
                                    52, 16, 15
                                ]
                            ],
                            [
                                "Sherman",
                                [
                                    1, 137
                                ]
                            ],
                            [
                                "Shirley",
                                [
                                    137, 57, 16, 62, 12, 15, 140
                                ]
                            ],
                            [
                                "Sibdall",
                                [
                                    3
                                ]
                            ],
                            [
                                "Sibthorpe",
                                [
                                    130, 158
                                ]
                            ],
                            [
                                "Sidney",
                                [
                                    163, 8, 14, 124
                                ]
                            ],
                            [
                                "Singer",
                                [
                                    1
                                ]
                            ],
                            [
                                "Slatier",
                                [
                                    1, 130, 14
                                ]
                            ],
                            [
                                "Slingsby",
                                [
                                    137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                "Slye",
                                [
                                    111, 5, 4, 14
                                ]
                            ],
                            [
                                "Smith",
                                [
                                    55, 5, 137, 57, 62, 12, 11, 14, 15, 124, 140, 138, 3, 144
                                ]
                            ],
                            [
                                "Smithe",
                                [
                                    61
                                ]
                            ],
                            [
                                "Smyth",
                                [
                                    25
                                ]
                            ],
                            [
                                "Smythe",
                                [
                                    163
                                ]
                            ],
                            [
                                "Sneller",
                                [
                                    12
                                ]
                            ],
                            [
                                "Somerset",
                                [
                                    1, 111, 5, 84, 4, 14, 3
                                ]
                            ],
                            [
                                "Sparkes",
                                [
                                    62
                                ]
                            ],
                            [
                                "Speed",
                                [
                                    52, 15
                                ]
                            ],
                            [
                                "Spencer",
                                [
                                    1, 61
                                ]
                            ],
                            [
                                "Spurling",
                                [
                                    137
                                ]
                            ],
                            [
                                "Stafford",
                                [
                                    52, 127, 5, 137, 12, 11, 15, 48
                                ]
                            ],
                            [
                                "Standish",
                                [
                                    137
                                ]
                            ],
                            [
                                "Stanfort",
                                [
                                    25
                                ]
                            ],
                            [
                                "Stanhope",
                                [
                                    1, 111, 5, 84, 4, 14, 3
                                ]
                            ],
                            [
                                "Stanley",
                                [
                                    163, 117
                                ]
                            ],
                            [
                                "Stapleford",
                                [
                                    1
                                ]
                            ],
                            [
                                "Starkey",
                                [
                                    25
                                ]
                            ],
                            [
                                "Stavely",
                                [
                                    3
                                ]
                            ],
                            [
                                "Staverton",
                                [
                                    25
                                ]
                            ],
                            [
                                "Stavorton",
                                [
                                    3
                                ]
                            ],
                            [
                                "Stone",
                                [
                                    14
                                ]
                            ],
                            [
                                "Stratford",
                                [
                                    62, 12, 4
                                ]
                            ],
                            [
                                "Strelly",
                                [
                                    137
                                ]
                            ],
                            [
                                "Stuart",
                                [
                                    1, 111, 163, 122, 55, 103, 25, 160, 5, 137, 57, 16, 11, 4, 14, 15, 3
                                ]
                            ],
                            [
                                "Stutville",
                                [
                                    52, 137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                "Styles",
                                [
                                    137
                                ]
                            ],
                            [
                                "Sumpner",
                                [
                                    52, 15
                                ]
                            ],
                            [
                                "Swanston",
                                [
                                    8, 5, 137, 16, 12, 11, 2
                                ]
                            ],
                            [
                                "Sweetman",
                                [
                                    137
                                ]
                            ],
                            [
                                "Swinnerton",
                                [
                                    5, 4, 14
                                ]
                            ],
                            [
                                "Talbot",
                                [
                                    5, 4, 14
                                ]
                            ],
                            [
                                "Tarbock",
                                [
                                    55
                                ]
                            ],
                            [
                                "Tarlton",
                                [
                                    2
                                ]
                            ],
                            [
                                "Taylor",
                                [
                                    52, 111, 163, 55, 127, 5, 137, 57, 16, 12, 11, 15, 48, 140
                                ]
                            ],
                            [
                                "Tey",
                                [
                                    62
                                ]
                            ],
                            [
                                "Thaire",
                                [
                                    163
                                ]
                            ],
                            [
                                "Thayer",
                                [
                                    14, 124, 3
                                ]
                            ],
                            [
                                "Thomkins",
                                [
                                    163
                                ]
                            ],
                            [
                                "Thompson",
                                [
                                    5, 137, 57, 12, 15, 2, 140, 32
                                ]
                            ],
                            [
                                "Tilney",
                                [
                                    1, 111, 163, 5, 4, 14, 9, 3
                                ]
                            ],
                            [
                                "Tomson",
                                [
                                    5
                                ]
                            ],
                            [
                                "Tooley",
                                [
                                    111, 5
                                ]
                            ],
                            [
                                "Topcliffe",
                                [
                                    61
                                ]
                            ],
                            [
                                "Topen",
                                [
                                    9
                                ]
                            ],
                            [
                                "Topham",
                                [
                                    25
                                ]
                            ],
                            [
                                "Towell",
                                [
                                    9
                                ]
                            ],
                            [
                                "Towne",
                                [
                                    1, 5, 4, 14, 2
                                ]
                            ],
                            [
                                "Townsend",
                                [
                                    16
                                ]
                            ],
                            [
                                "Tremyll",
                                [
                                    160
                                ]
                            ],
                            [
                                "Trevell",
                                [
                                    130, 158
                                ]
                            ],
                            [
                                "Trigg",
                                [
                                    52, 137
                                ]
                            ],
                            [
                                "Trumbull",
                                [
                                    5
                                ]
                            ],
                            [
                                "Trussell",
                                [
                                    8
                                ]
                            ],
                            [
                                "Tuchenner",
                                [
                                    9
                                ]
                            ],
                            [
                                "Tuckfield",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "Tudor",
                                [
                                    1, 111
                                ]
                            ],
                            [
                                "Tunstall",
                                [
                                    1
                                ]
                            ],
                            [
                                "Turner",
                                [
                                    52, 16, 15
                                ]
                            ],
                            [
                                "Tychebourne",
                                [
                                    62
                                ]
                            ],
                            [
                                "Underwood",
                                [
                                    111, 8, 5, 137, 62
                                ]
                            ],
                            [
                                "unidentified",
                                [
                                    25
                                ]
                            ],
                            [
                                "Ussher",
                                [
                                    5
                                ]
                            ],
                            [
                                "Valaresso",
                                [
                                    5
                                ]
                            ],
                            [
                                "Vane",
                                [
                                    160
                                ]
                            ],
                            [
                                "Vernon",
                                [
                                    5, 137, 11
                                ]
                            ],
                            [
                                "Villiers",
                                [
                                    137
                                ]
                            ],
                            [
                                "Vincente",
                                [
                                    61
                                ]
                            ],
                            [
                                "von Hessen-Cassel",
                                [
                                    55, 5
                                ]
                            ],
                            [
                                "Waintworth",
                                [
                                    14
                                ]
                            ],
                            [
                                "Walpole",
                                [
                                    14, 124
                                ]
                            ],
                            [
                                "Walsingham",
                                [
                                    1, 26, 84, 2
                                ]
                            ],
                            [
                                "Warcupp",
                                [
                                    163
                                ]
                            ],
                            [
                                "Warden",
                                [
                                    1
                                ]
                            ],
                            [
                                "Waters",
                                [
                                    163, 11
                                ]
                            ],
                            [
                                "Wathen",
                                [
                                    137
                                ]
                            ],
                            [
                                "Waverly",
                                [
                                    57
                                ]
                            ],
                            [
                                "Webb",
                                [
                                    5
                                ]
                            ],
                            [
                                "Webbe",
                                [
                                    1
                                ]
                            ],
                            [
                                "Webster",
                                [
                                    11
                                ]
                            ],
                            [
                                "Weeks",
                                [
                                    5
                                ]
                            ],
                            [
                                "Welshe",
                                [
                                    61
                                ]
                            ],
                            [
                                "Wentworth",
                                [
                                    137
                                ]
                            ],
                            [
                                "Whaston",
                                [
                                    32
                                ]
                            ],
                            [
                                "Wheaton",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "Whelple",
                                [
                                    1
                                ]
                            ],
                            [
                                "Whitbee",
                                [
                                    137
                                ]
                            ],
                            [
                                "White",
                                [
                                    137
                                ]
                            ],
                            [
                                "Whitelocke",
                                [
                                    159
                                ]
                            ],
                            [
                                "Whithorne",
                                [
                                    5
                                ]
                            ],
                            [
                                "Whyte",
                                [
                                    163
                                ]
                            ],
                            [
                                "Wigpitt",
                                [
                                    62
                                ]
                            ],
                            [
                                "Wilbraham",
                                [
                                    52, 15
                                ]
                            ],
                            [
                                "Wild",
                                [
                                    1
                                ]
                            ],
                            [
                                "Wilkes",
                                [
                                    52
                                ]
                            ],
                            [
                                "Willbraham",
                                [
                                    55, 137
                                ]
                            ],
                            [
                                "Willet",
                                [
                                    3
                                ]
                            ],
                            [
                                "Williamson",
                                [
                                    25
                                ]
                            ],
                            [
                                "Wilson",
                                [
                                    1, 52, 127, 5, 137, 12, 11, 15, 48, 2, 140
                                ]
                            ],
                            [
                                "Winwood",
                                [
                                    25, 160
                                ]
                            ],
                            [
                                "Withers",
                                [
                                    137
                                ]
                            ],
                            [
                                "Witter",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "Witton",
                                [
                                    5, 11
                                ]
                            ],
                            [
                                "Wolsey",
                                [
                                    25
                                ]
                            ],
                            [
                                "Woodford",
                                [
                                    163, 130, 14
                                ]
                            ],
                            [
                                "Woodliffe",
                                [
                                    3
                                ]
                            ],
                            [
                                "Woolley",
                                [
                                    5
                                ]
                            ],
                            [
                                "Wormleighton",
                                [
                                    14
                                ]
                            ],
                            [
                                "Worth",
                                [
                                    137, 57, 12, 11, 14, 15, 124, 140, 3
                                ]
                            ],
                            [
                                "Wotton",
                                [
                                    157, 5
                                ]
                            ],
                            [
                                "Wright",
                                [
                                    52, 12
                                ]
                            ],
                            [
                                "Yonge",
                                [
                                    1, 9
                                ]
                            ],
                            [
                                "Young",
                                [
                                    148, 52, 5, 137, 57, 12, 15, 2, 140
                                ]
                            ],
                            [
                                "Zinzan",
                                [
                                    137
                                ]
                            ],
                            [
                                "\u2013\u2013\u2013",
                                [
                                    1, 25, 160
                                ]
                            ]
                        ]
                    }
                ],
                [
                    "Person Event Role",
                    {
                        "t": "s",
                        "q": [
                            "SELECT DISTINCT rl.name, tr.id, tr.name",
                            "FROM ltbapp_ass_event_troupes AS iset, ltbapp_ass_event_people AS isep, ltbapp_troupe AS tr, ltbapp_role AS rl, ltbapp_ass_event_people_role AS isepr",
                            "WHERE tr.id = iset.troupe_id AND isep.event_id = iset.event_id AND isep.id = isepr.ass_event_people_id AND rl.id = isepr.role_id",
                            "ORDER BY rl.name, tr.name"
                        ],
                        "h": "Contains a list of roles of people involved in the production of primary sources and in the historical activities described in these sources.",
                        "i": [
                            [
                                "agent",
                                [
                                    1, 61
                                ]
                            ],
                            [
                                "alderman",
                                [
                                    5, 12
                                ]
                            ],
                            [
                                "ambassador",
                                [
                                    5
                                ]
                            ],
                            [
                                "appraiser",
                                [
                                    11
                                ]
                            ],
                            [
                                "apprentice",
                                [
                                    55, 57, 124
                                ]
                            ],
                            [
                                "arbitrator",
                                [
                                    14
                                ]
                            ],
                            [
                                "assailant",
                                [
                                    1
                                ]
                            ],
                            [
                                "attorney",
                                [
                                    8
                                ]
                            ],
                            [
                                "Attorney General",
                                [
                                    12
                                ]
                            ],
                            [
                                "audience member",
                                [
                                    1, 103, 5, 137, 57, 16, 15
                                ]
                            ],
                            [
                                "author",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "balladeer",
                                [
                                    11
                                ]
                            ],
                            [
                                "beneficiary",
                                [
                                    52, 25, 5, 137, 61
                                ]
                            ],
                            [
                                "bondsman",
                                [
                                    158
                                ]
                            ],
                            [
                                "bookkeeper",
                                [
                                    137
                                ]
                            ],
                            [
                                "bookseller",
                                [
                                    5
                                ]
                            ],
                            [
                                "broker",
                                [
                                    12
                                ]
                            ],
                            [
                                "brother",
                                [
                                    137, 11
                                ]
                            ],
                            [
                                "carpenter",
                                [
                                    3
                                ]
                            ],
                            [
                                "censor",
                                [
                                    55
                                ]
                            ],
                            [
                                "churchwarden",
                                [
                                    137
                                ]
                            ],
                            [
                                "citizen",
                                [
                                    12
                                ]
                            ],
                            [
                                "clerk",
                                [
                                    137
                                ]
                            ],
                            [
                                "clerk of the Revels",
                                [
                                    52, 127, 5, 137, 12, 11, 4, 14, 15, 48
                                ]
                            ],
                            [
                                "clown",
                                [
                                    1
                                ]
                            ],
                            [
                                "commissioner",
                                [
                                    137, 14
                                ]
                            ],
                            [
                                "company founder",
                                [
                                    55
                                ]
                            ],
                            [
                                "company manager",
                                [
                                    1, 52, 8, 55, 158, 5, 137, 57, 16, 62, 12, 4, 14, 15, 124
                                ]
                            ],
                            [
                                "company member",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "company organizer",
                                [
                                    55, 16, 11
                                ]
                            ],
                            [
                                "complainant",
                                [
                                    137
                                ]
                            ],
                            [
                                "composer",
                                [
                                    159
                                ]
                            ],
                            [
                                "comptroller of the Revels",
                                [
                                    5, 11, 4, 14
                                ]
                            ],
                            [
                                "conspirator",
                                [
                                    111
                                ]
                            ],
                            [
                                "constable",
                                [
                                    137
                                ]
                            ],
                            [
                                "correspondent",
                                [
                                    1, 157, 148, 122, 154, 5, 137, 57, 11, 14, 2, 124, 9
                                ]
                            ],
                            [
                                "council clerk",
                                [
                                    1, 111, 84, 3
                                ]
                            ],
                            [
                                "councillor",
                                [
                                    1, 111, 5, 137, 84, 4, 14, 2, 3
                                ]
                            ],
                            [
                                "councillor of Gray's Inn",
                                [
                                    11
                                ]
                            ],
                            [
                                "counsel for the defense",
                                [
                                    5, 137, 3
                                ]
                            ],
                            [
                                "Count-Duke of Olivares",
                                [
                                    5
                                ]
                            ],
                            [
                                "court officer",
                                [
                                    62
                                ]
                            ],
                            [
                                "court recorder",
                                [
                                    55, 156, 5
                                ]
                            ],
                            [
                                "courtier",
                                [
                                    11
                                ]
                            ],
                            [
                                "creditor",
                                [
                                    1, 61
                                ]
                            ],
                            [
                                "daughter",
                                [
                                    5
                                ]
                            ],
                            [
                                "Dean of the Chapel Royal",
                                [
                                    122
                                ]
                            ],
                            [
                                "debtor",
                                [
                                    1, 8, 137, 61
                                ]
                            ],
                            [
                                "deceased",
                                [
                                    1, 25, 5, 137
                                ]
                            ],
                            [
                                "defendant",
                                [
                                    52, 8, 130, 55, 156, 158, 5, 137, 57, 61, 12, 11, 14, 15, 124, 32, 3
                                ]
                            ],
                            [
                                "deponent",
                                [
                                    137, 11, 14, 124, 3
                                ]
                            ],
                            [
                                "deputy",
                                [
                                    137, 12, 14
                                ]
                            ],
                            [
                                "designer",
                                [
                                    137
                                ]
                            ],
                            [
                                "diarist",
                                [
                                    5, 137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                "disputant",
                                [
                                    1, 137
                                ]
                            ],
                            [
                                "doorkeeper",
                                [
                                    14
                                ]
                            ],
                            [
                                "draper",
                                [
                                    57
                                ]
                            ],
                            [
                                "executor",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "executor, alternate",
                                [
                                    5
                                ]
                            ],
                            [
                                "executrix",
                                [
                                    52, 5, 137
                                ]
                            ],
                            [
                                "father",
                                [
                                    137
                                ]
                            ],
                            [
                                "fencer",
                                [
                                    137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                "gatherer",
                                [
                                    62
                                ]
                            ],
                            [
                                "gentleman",
                                [
                                    148, 11, 2
                                ]
                            ],
                            [
                                "gentleman usher",
                                [
                                    12
                                ]
                            ],
                            [
                                "Governor of the Cockpit Players",
                                [
                                    52, 127, 137, 12, 15, 48
                                ]
                            ],
                            [
                                "grantee",
                                [
                                    5
                                ]
                            ],
                            [
                                "groom",
                                [
                                    11
                                ]
                            ],
                            [
                                "groom of the Chamber",
                                [
                                    52, 127, 137, 12, 4, 14, 15, 48, 140
                                ]
                            ],
                            [
                                "groom of the Revels",
                                [
                                    52, 127, 5, 137, 12, 11, 15, 48
                                ]
                            ],
                            [
                                "guardian",
                                [
                                    137
                                ]
                            ],
                            [
                                "guest, attendant",
                                [
                                    1
                                ]
                            ],
                            [
                                "hired man",
                                [
                                    12
                                ]
                            ],
                            [
                                "husband",
                                [
                                    52, 137, 14, 124
                                ]
                            ],
                            [
                                "husband, deceased",
                                [
                                    55
                                ]
                            ],
                            [
                                "judge of the Prerogative Court",
                                [
                                    137
                                ]
                            ],
                            [
                                "justice of the peace",
                                [
                                    148, 2, 124
                                ]
                            ],
                            [
                                "keeper of the Privy Seal",
                                [
                                    122, 5, 62
                                ]
                            ],
                            [
                                "King",
                                [
                                    122, 55, 5, 137, 16, 11, 14, 15, 3
                                ]
                            ],
                            [
                                "landlord",
                                [
                                    137, 61
                                ]
                            ],
                            [
                                "landowner",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "lawyer",
                                [
                                    14
                                ]
                            ],
                            [
                                "leaseholder",
                                [
                                    55, 5, 137, 57, 62
                                ]
                            ],
                            [
                                "legatee",
                                [
                                    137
                                ]
                            ],
                            [
                                "lessee",
                                [
                                    55, 5, 137
                                ]
                            ],
                            [
                                "lessor",
                                [
                                    130, 55, 5, 137, 57, 62, 14
                                ]
                            ],
                            [
                                "lord admiral",
                                [
                                    1, 9
                                ]
                            ],
                            [
                                "Lord Chamberlain",
                                [
                                    1, 148, 52, 111, 5, 137, 61, 14, 15, 2, 124
                                ]
                            ],
                            [
                                "lord chamberlain, late",
                                [
                                    55, 5
                                ]
                            ],
                            [
                                "Lord Chancellor",
                                [
                                    55
                                ]
                            ],
                            [
                                "lord chief justice",
                                [
                                    55, 156, 5
                                ]
                            ],
                            [
                                "lord deputy of Ireland",
                                [
                                    137
                                ]
                            ],
                            [
                                "lord keeper",
                                [
                                    14, 3
                                ]
                            ],
                            [
                                "lord mayor of London",
                                [
                                    1, 139, 111, 8, 30, 5, 26, 84, 4, 14, 9, 118, 32, 3
                                ]
                            ],
                            [
                                "Lord Treasurer",
                                [
                                    1, 9
                                ]
                            ],
                            [
                                "master",
                                [
                                    148, 8, 137, 57, 12, 15, 2, 140
                                ]
                            ],
                            [
                                "Master in Chancery",
                                [
                                    3
                                ]
                            ],
                            [
                                "Master of Revels, deputy",
                                [
                                    4, 14
                                ]
                            ],
                            [
                                "master of the children of her Highness's chapel",
                                [
                                    8
                                ]
                            ],
                            [
                                "master of the children of the chapel",
                                [
                                    122
                                ]
                            ],
                            [
                                "Master of the Revels",
                                [
                                    1, 52, 111, 127, 150, 103, 5, 137, 57, 16, 62, 12, 11, 4, 14, 15, 48, 124, 140, 9, 138, 153, 3, 152
                                ]
                            ],
                            [
                                "master of the Revels (defunct)",
                                [
                                    5
                                ]
                            ],
                            [
                                "master of the Revels' man",
                                [
                                    61
                                ]
                            ],
                            [
                                "Master of the Rolls",
                                [
                                    156
                                ]
                            ],
                            [
                                "master of the Wardrobe",
                                [
                                    15
                                ]
                            ],
                            [
                                "mercer",
                                [
                                    3
                                ]
                            ],
                            [
                                "merchant tailor",
                                [
                                    57
                                ]
                            ],
                            [
                                "messenger",
                                [
                                    137, 61
                                ]
                            ],
                            [
                                "messenger of the Chamber",
                                [
                                    5, 61
                                ]
                            ],
                            [
                                "money lender",
                                [
                                    55, 16, 4, 2
                                ]
                            ],
                            [
                                "mother",
                                [
                                    55, 137
                                ]
                            ],
                            [
                                "newswriter",
                                [
                                    137
                                ]
                            ],
                            [
                                "notary public",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "occupant",
                                [
                                    137
                                ]
                            ],
                            [
                                "overseer",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "painter",
                                [
                                    137
                                ]
                            ],
                            [
                                "patron",
                                [
                                    1, 148, 111, 55, 117, 5, 16, 84, 61, 11, 4, 14, 15, 2, 3, 152
                                ]
                            ],
                            [
                                "payee",
                                [
                                    1, 52, 7, 5, 137, 14, 15, 32
                                ]
                            ],
                            [
                                "payer",
                                [
                                    1
                                ]
                            ],
                            [
                                "person sought for arrest",
                                [
                                    137
                                ]
                            ],
                            [
                                "petitionee",
                                [
                                    137, 12
                                ]
                            ],
                            [
                                "petitioner",
                                [
                                    1, 117, 137, 57, 12
                                ]
                            ],
                            [
                                "plaintiff",
                                [
                                    1, 52, 8, 130, 55, 156, 158, 5, 137, 57, 61, 12, 11, 14, 15, 124, 32, 3
                                ]
                            ],
                            [
                                "plaintiff's counsel",
                                [
                                    55, 137, 3
                                ]
                            ],
                            [
                                "player",
                                [
                                    1, 52, 111, 8, 55, 117, 5, 137, 57, 16, 62, 61, 12, 11, 4, 14, 15, 2, 124, 140, 9, 3
                                ]
                            ],
                            [
                                "playhouse builder",
                                [
                                    1, 55, 16, 11, 3
                                ]
                            ],
                            [
                                "playhouse entrepreneur",
                                [
                                    55, 5, 16, 11
                                ]
                            ],
                            [
                                "playhouse financier",
                                [
                                    3
                                ]
                            ],
                            [
                                "playhouse manager",
                                [
                                    1, 52, 8, 130, 55, 103, 137, 57, 16, 62, 11, 15, 140
                                ]
                            ],
                            [
                                "playhouse owner",
                                [
                                    1, 148, 52, 7, 111, 8, 55, 103, 5, 137, 16, 62, 61, 11, 4, 14, 2, 9, 132, 3
                                ]
                            ],
                            [
                                "playhouse sharer",
                                [
                                    1, 8, 130, 55, 158, 5, 137, 62, 14, 2
                                ]
                            ],
                            [
                                "playwright",
                                [
                                    1, 52, 111, 130, 55, 5, 137, 16, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 138, 3, 144
                                ]
                            ],
                            [
                                "poet",
                                [
                                    1, 5, 137, 16, 12
                                ]
                            ],
                            [
                                "president of the council",
                                [
                                    5
                                ]
                            ],
                            [
                                "Prince",
                                [
                                    5
                                ]
                            ],
                            [
                                "principal secretary",
                                [
                                    1, 26, 84, 2
                                ]
                            ],
                            [
                                "prisoner",
                                [
                                    16
                                ]
                            ],
                            [
                                "Privy Councillor",
                                [
                                    8
                                ]
                            ],
                            [
                                "property holder",
                                [
                                    8, 137
                                ]
                            ],
                            [
                                "property holder (deceased)",
                                [
                                    55, 5, 16, 11
                                ]
                            ],
                            [
                                "property maker",
                                [
                                    137
                                ]
                            ],
                            [
                                "purchaser",
                                [
                                    1
                                ]
                            ],
                            [
                                "Queen",
                                [
                                    1, 159, 111, 5, 62, 11, 14
                                ]
                            ],
                            [
                                "recorder",
                                [
                                    55
                                ]
                            ],
                            [
                                "Recorder of London",
                                [
                                    148, 2
                                ]
                            ],
                            [
                                "relict",
                                [
                                    55
                                ]
                            ],
                            [
                                "reporter",
                                [
                                    5
                                ]
                            ],
                            [
                                "scribe",
                                [
                                    52, 61, 12, 15
                                ]
                            ],
                            [
                                "scrivener",
                                [
                                    52, 137, 61, 14
                                ]
                            ],
                            [
                                "secretary of state",
                                [
                                    55, 117, 5, 16, 11
                                ]
                            ],
                            [
                                "seller",
                                [
                                    1
                                ]
                            ],
                            [
                                "servant",
                                [
                                    1, 148, 137, 12, 11, 14, 15, 2, 124, 140
                                ]
                            ],
                            [
                                "sharer",
                                [
                                    1, 137, 14, 2, 124
                                ]
                            ],
                            [
                                "signatory",
                                [
                                    55
                                ]
                            ],
                            [
                                "sister",
                                [
                                    5, 11
                                ]
                            ],
                            [
                                "slanderer",
                                [
                                    14
                                ]
                            ],
                            [
                                "solicitor",
                                [
                                    137, 11
                                ]
                            ],
                            [
                                "son",
                                [
                                    8, 5, 137
                                ]
                            ],
                            [
                                "Spanish ambassador",
                                [
                                    122
                                ]
                            ],
                            [
                                "suitor",
                                [
                                    62
                                ]
                            ],
                            [
                                "supplicant",
                                [
                                    9
                                ]
                            ],
                            [
                                "tailor",
                                [
                                    130
                                ]
                            ],
                            [
                                "tenant",
                                [
                                    1, 55, 137, 16, 62, 11, 32
                                ]
                            ],
                            [
                                "testator",
                                [
                                    52, 5, 137, 61
                                ]
                            ],
                            [
                                "tireman",
                                [
                                    1
                                ]
                            ],
                            [
                                "traveller",
                                [
                                    55, 5, 26
                                ]
                            ],
                            [
                                "trustee",
                                [
                                    5, 14, 124
                                ]
                            ],
                            [
                                "tumbler",
                                [
                                    1
                                ]
                            ],
                            [
                                "uncle",
                                [
                                    137
                                ]
                            ],
                            [
                                "vendor",
                                [
                                    55
                                ]
                            ],
                            [
                                "vicar-general of the Isle of Man",
                                [
                                    1
                                ]
                            ],
                            [
                                "vice-chamberlain",
                                [
                                    148, 2
                                ]
                            ],
                            [
                                "victim",
                                [
                                    8
                                ]
                            ],
                            [
                                "wardrobe keeper",
                                [
                                    137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                "widow",
                                [
                                    1, 5, 137, 11, 15
                                ]
                            ],
                            [
                                "wife",
                                [
                                    1, 55
                                ]
                            ],
                            [
                                "witness",
                                [
                                    1, 52, 111, 5, 137, 62, 12, 11, 14, 2, 124, 3
                                ]
                            ],
                            [
                                "Yeoman of the Revels",
                                [
                                    52, 127, 5, 137, 12, 4, 14, 15, 48
                                ]
                            ],
                            [
                                "yeoman of the Revels (deceased)",
                                [
                                    137
                                ]
                            ],
                            [
                                "yeoman of the Revels (elect)",
                                [
                                    137
                                ]
                            ]
                        ]
                    }
                ],
                [
                    "Person Date",
                    {
                        "t": "n",
                        "q": [
                            "SELECT DISTINCT pe.from_year, tr.id, tr.name",
                            "FROM ltbapp_ass_event_troupes AS iset, ltbapp_ass_event_people AS isep, ltbapp_person AS pe, ltbapp_troupe AS tr",
                            "WHERE pe.id = isep.person_id AND tr.id = iset.troupe_id AND isep.event_id = iset.event_id",
                            "ORDER BY pe.from_year, tr.name"
                        ],
                        "h": "",
                        "i": [
                            [
                                23, [
                                    148, 8, 55, 5, 137, 2
                                ]
                            ],
                            [
                                1378, [
                                    161
                                ]
                            ],
                            [
                                1526, [
                                    25
                                ]
                            ],
                            [
                                1540, [
                                    137
                                ]
                            ],
                            [
                                1552, [
                                    1, 111, 5, 16, 11, 4, 14, 124, 3
                                ]
                            ],
                            [
                                1557, [
                                    139
                                ]
                            ],
                            [
                                1560, [
                                    1, 111, 8
                                ]
                            ],
                            [
                                1567, [
                                    163, 137, 16
                                ]
                            ],
                            [
                                1570, [
                                    1, 7, 111, 8, 55, 5, 137, 26, 62, 61, 11, 4, 14, 2, 9, 3
                                ]
                            ],
                            [
                                1571, [
                                    1, 148, 25, 61, 2, 9
                                ]
                            ],
                            [
                                1572, [
                                    11
                                ]
                            ],
                            [
                                1574, [
                                    61
                                ]
                            ],
                            [
                                1576, [
                                    148, 52, 7, 111, 163, 8, 55, 156, 5, 137, 62, 11, 4, 14, 15, 2, 32
                                ]
                            ],
                            [
                                1577, [
                                    1, 148, 137, 26, 84, 2
                                ]
                            ],
                            [
                                1578, [
                                    1, 148, 111, 8, 30, 5, 26, 84, 4, 14, 2, 9, 118, 32, 3
                                ]
                            ],
                            [
                                1579, [
                                    55, 61
                                ]
                            ],
                            [
                                1581, [
                                    1, 148, 111, 163, 8, 5, 137, 4, 14, 2, 124
                                ]
                            ],
                            [
                                1582, [
                                    163, 8, 55, 156, 5, 137, 61, 11, 4
                                ]
                            ],
                            [
                                1583, [
                                    1, 52, 111, 163, 5, 84, 11, 4, 14, 15, 124, 9, 3
                                ]
                            ],
                            [
                                1584, [
                                    148, 52, 137, 57, 12, 15, 2, 140
                                ]
                            ],
                            [
                                1585, [
                                    1, 7, 111, 55, 16, 61, 4, 2, 9, 132, 3
                                ]
                            ],
                            [
                                1588, [
                                    25
                                ]
                            ],
                            [
                                1589, [
                                    1, 61, 9, 3
                                ]
                            ],
                            [
                                1590, [
                                    9
                                ]
                            ],
                            [
                                1591, [
                                    1, 7, 111, 8, 5, 137, 61, 12, 4, 14, 124
                                ]
                            ],
                            [
                                1592, [
                                    1, 61, 2
                                ]
                            ],
                            [
                                1593, [
                                    1, 111, 8, 122, 55, 156, 117, 5, 137, 57, 84, 12, 11, 4, 14, 15, 2, 124, 140, 9, 3
                                ]
                            ],
                            [
                                1594, [
                                    1, 111, 55, 117, 16, 84, 11, 3
                                ]
                            ],
                            [
                                1596, [
                                    1, 52, 111, 163, 130, 55, 117, 5, 137, 57, 62, 61, 12, 11, 4, 14, 15, 140, 138, 3
                                ]
                            ],
                            [
                                1597, [
                                    1, 111, 8, 122, 130, 55, 5, 137, 16, 84, 62, 61, 12, 11, 4, 14, 15, 124, 140, 3
                                ]
                            ],
                            [
                                1598, [
                                    1, 52, 111, 163, 8, 122, 55, 103, 25, 160, 5, 137, 57, 16, 62, 12, 11, 4, 14, 15, 124, 140, 138, 3
                                ]
                            ],
                            [
                                1599, [
                                    1, 52, 111, 163, 103, 25, 160, 5, 137, 57, 16, 11, 15, 2
                                ]
                            ],
                            [
                                1600, [
                                    1, 52, 111, 8, 55, 156, 5, 137, 57, 16, 84, 62, 12, 4, 14, 15, 140, 3
                                ]
                            ],
                            [
                                1601, [
                                    1, 111, 25, 160, 5, 14, 3
                                ]
                            ],
                            [
                                1602, [
                                    1, 52, 111, 8, 55, 25, 160, 5, 137, 57, 16, 62, 12, 11, 4, 14, 15, 124, 140, 3, 144
                                ]
                            ],
                            [
                                1603, [
                                    1, 111, 163, 130, 55, 25, 160, 5, 137, 62, 11, 4, 14, 2, 124, 3
                                ]
                            ],
                            [
                                1604, [
                                    122, 55, 5, 16, 11, 4, 14
                                ]
                            ],
                            [
                                1605, [
                                    111, 5
                                ]
                            ],
                            [
                                1606, [
                                    163, 55, 5, 137, 62, 11, 4, 14, 15, 124, 140
                                ]
                            ],
                            [
                                1607, [
                                    52, 111, 163, 130, 55, 158, 127, 5, 137, 57, 16, 12, 11, 15, 48, 140
                                ]
                            ],
                            [
                                1608, [
                                    52, 122, 130, 55, 158, 160, 5, 137, 16, 12, 11, 14, 124
                                ]
                            ],
                            [
                                1609, [
                                    1, 52, 55, 5, 137, 16, 12, 11, 14, 15, 124
                                ]
                            ],
                            [
                                1610, [
                                    55, 5, 16, 62, 11
                                ]
                            ],
                            [
                                1611, [
                                    111, 8, 55, 158, 25, 160, 5, 137, 16, 12
                                ]
                            ],
                            [
                                1612, [
                                    55, 156, 25, 5, 137, 57, 12, 11, 4, 14, 15, 124, 140
                                ]
                            ],
                            [
                                1613, [
                                    157, 52, 55, 25, 160, 5, 137, 57, 16, 62, 12, 11, 14, 15, 140
                                ]
                            ],
                            [
                                1614, [
                                    5, 137
                                ]
                            ],
                            [
                                1615, [
                                    55, 158, 5, 16, 62, 11, 14
                                ]
                            ],
                            [
                                1616, [
                                    5, 137, 11
                                ]
                            ],
                            [
                                1617, [
                                    137, 16, 12, 14, 15, 48, 124
                                ]
                            ],
                            [
                                1618, [
                                    137, 62, 12
                                ]
                            ],
                            [
                                1619, [
                                    52, 111, 127, 150, 103, 5, 137, 57, 16, 62, 12, 11, 14, 15, 48, 2, 124, 140, 138, 153, 152
                                ]
                            ],
                            [
                                1620, [
                                    111, 5, 137, 12, 11, 2
                                ]
                            ],
                            [
                                1621, [
                                    14, 124
                                ]
                            ],
                            [
                                1622, [
                                    52, 8, 127, 5, 137, 57, 16, 62, 12, 11, 15, 48, 2, 124, 140
                                ]
                            ],
                            [
                                1623, [
                                    52, 5, 137, 16, 62, 12, 11, 14, 15, 124
                                ]
                            ],
                            [
                                1624, [
                                    52, 5, 137, 57, 16, 62, 12, 11, 15, 140
                                ]
                            ],
                            [
                                1625, [
                                    52, 127, 5, 137, 57, 12, 11, 15, 48, 140
                                ]
                            ],
                            [
                                1626, [
                                    159, 103, 160, 137, 15
                                ]
                            ],
                            [
                                1627, [
                                    5, 137
                                ]
                            ],
                            [
                                1628, [
                                    137
                                ]
                            ],
                            [
                                1629, [
                                    52, 127, 154, 137, 57, 12, 15, 48
                                ]
                            ],
                            [
                                1630, [
                                    52, 137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                1631, [
                                    52, 137, 57, 12, 15, 140, 152
                                ]
                            ],
                            [
                                1632, [
                                    52, 5, 137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                1633, [
                                    159, 160, 5, 137, 12, 2
                                ]
                            ],
                            [
                                1634, [
                                    52, 160, 137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                1635, [
                                    52, 8, 103, 5, 137, 12, 15, 2
                                ]
                            ],
                            [
                                1636, [
                                    137, 12, 15
                                ]
                            ],
                            [
                                1637, [
                                    52, 137
                                ]
                            ],
                            [
                                1638, [
                                    52, 137
                                ]
                            ],
                            [
                                1639, [
                                    52, 5, 137, 12
                                ]
                            ],
                            [
                                1640, [
                                    137, 12, 140
                                ]
                            ],
                            [
                                1641, [
                                    52, 127, 137, 12, 15, 48, 140
                                ]
                            ],
                            [
                                1642, [
                                    137
                                ]
                            ]
                        ]
                    }
                ]
            ]
        ],
        [
            "Troupe & Venue",
            "This category contains facets classifying EMLoT's troupes and venues.",
            [
                [
                    "Troupe Name",
                    {
                        "t": "s",
                        "q": [
                            "SELECT ltbapp_troupe.name, ltbapp_troupe.id",
                            "FROM ltbapp_troupe",
                            "ORDER BY ltbapp_troupe.name"
                        ],
                        "h": "Contains an alphabetical list of troupes.",
                        "i": [
                            [
                                "Admiral's Men",
                                [
                                    1
                                ]
                            ],
                            [
                                "apprentices",
                                [
                                    157
                                ]
                            ],
                            [
                                "Arundel's Men",
                                [
                                    148
                                ]
                            ],
                            [
                                "Beeston's Boys",
                                [
                                    52
                                ]
                            ],
                            [
                                "Blackfriars Musicians",
                                [
                                    159
                                ]
                            ],
                            [
                                "Boar's Head Inn Players",
                                [
                                    139
                                ]
                            ],
                            [
                                "Chamberlain's Men (1564-1596)",
                                [
                                    7
                                ]
                            ],
                            [
                                "Chamberlain's Men (1596-1603)",
                                [
                                    111
                                ]
                            ],
                            [
                                "Children of Paul's (II)",
                                [
                                    163
                                ]
                            ],
                            [
                                "Children of the Blackfriars",
                                [
                                    155
                                ]
                            ],
                            [
                                "Children of the Chapel (III)",
                                [
                                    8
                                ]
                            ],
                            [
                                "Children of the Chapel (IV)",
                                [
                                    122
                                ]
                            ],
                            [
                                "Children of the King's Revels",
                                [
                                    130
                                ]
                            ],
                            [
                                "Children of the Queen's Revels (1604-c1614)",
                                [
                                    55
                                ]
                            ],
                            [
                                "Children of the Revels",
                                [
                                    156
                                ]
                            ],
                            [
                                "Children of the Whitefriars",
                                [
                                    158
                                ]
                            ],
                            [
                                "Derby's Men (1594-c1635)",
                                [
                                    117
                                ]
                            ],
                            [
                                "Duke of York's Men (c1641-1642)",
                                [
                                    127
                                ]
                            ],
                            [
                                "Essex's Men",
                                [
                                    30
                                ]
                            ],
                            [
                                "French female troupe (c1629)",
                                [
                                    154
                                ]
                            ],
                            [
                                "French Players (c1629-30)",
                                [
                                    150
                                ]
                            ],
                            [
                                "French Players (c1635)",
                                [
                                    103
                                ]
                            ],
                            [
                                "Gentlemen of Gray's Inn",
                                [
                                    25
                                ]
                            ],
                            [
                                "Gentlemen of the Inns of Court",
                                [
                                    160
                                ]
                            ],
                            [
                                "King and Queen of Bohemia's Men",
                                [
                                    145
                                ]
                            ],
                            [
                                "King's Men (1603-1625)",
                                [
                                    5
                                ]
                            ],
                            [
                                "King's Men (1625-1642)",
                                [
                                    137
                                ]
                            ],
                            [
                                "King's Revels (1629-1637)",
                                [
                                    57
                                ]
                            ],
                            [
                                "Lady Elizabeth's Men",
                                [
                                    16
                                ]
                            ],
                            [
                                "Leicester's Men",
                                [
                                    26
                                ]
                            ],
                            [
                                "Mile End Players",
                                [
                                    141
                                ]
                            ],
                            [
                                "Oxford's Men (1580-1602)",
                                [
                                    84
                                ]
                            ],
                            [
                                "Palsgrave's Men",
                                [
                                    62
                                ]
                            ],
                            [
                                "Pembroke's Men",
                                [
                                    61
                                ]
                            ],
                            [
                                "Prince Charles' Men (1631-1642)",
                                [
                                    12
                                ]
                            ],
                            [
                                "Prince Charles' Men (c1609-1625)",
                                [
                                    11
                                ]
                            ],
                            [
                                "Prince Henry's Men",
                                [
                                    4
                                ]
                            ],
                            [
                                "Queen Anne's Men",
                                [
                                    14
                                ]
                            ],
                            [
                                "Queen Henrietta Maria's Men",
                                [
                                    15
                                ]
                            ],
                            [
                                "Queen of Bohemia's Men",
                                [
                                    48
                                ]
                            ],
                            [
                                "Queen's Men",
                                [
                                    2
                                ]
                            ],
                            [
                                "Red Bull (Revels) Company (1619-c1623)",
                                [
                                    124
                                ]
                            ],
                            [
                                "Red Bull Company (c1625-1642)",
                                [
                                    140
                                ]
                            ],
                            [
                                "Strange's Men (c1576-1594)",
                                [
                                    9
                                ]
                            ],
                            [
                                "strangers (c1623)",
                                [
                                    138
                                ]
                            ],
                            [
                                "Sussex's Men (1568-1583)",
                                [
                                    118
                                ]
                            ],
                            [
                                "Sussex's Men (1583-1593)",
                                [
                                    132
                                ]
                            ],
                            [
                                "the Clergy and Scholars of St Paul's",
                                [
                                    161
                                ]
                            ],
                            [
                                "troupe",
                                [
                                    153
                                ]
                            ],
                            [
                                "Warwick's Men",
                                [
                                    32
                                ]
                            ],
                            [
                                "Westminster Boys",
                                [
                                    35
                                ]
                            ],
                            [
                                "Worcester's Men (1589-1603)",
                                [
                                    3
                                ]
                            ],
                            [
                                "Young Men of the Strand",
                                [
                                    152
                                ]
                            ],
                            [
                                "Young Men of this City",
                                [
                                    144
                                ]
                            ]
                        ]
                    }
                ],
                [
                    "Troupe Type",
                    {
                        "t": "s",
                        "q": [
                            "SELECT tt.name, tr.id, tr.name",
                            "FROM ltbapp_troupe AS tr, ltbapp_troupetype AS tt, ltbapp_troupe_typeoftroupe AS istt",
                            "WHERE tr.id = istt.troupe_id AND tt.id = istt.troupetype_id",
                            "ORDER BY tt.name, tr.name"
                        ],
                        "h": "Contains a list of troupe types.",
                        "i": [
                            [
                                "adult players",
                                [
                                    1, 148, 139, 7, 111, 117, 127, 30, 150, 103, 25, 145, 5, 137, 57, 16, 26, 84, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 118, 132, 32, 3, 152
                                ]
                            ],
                            [
                                "amateur",
                                [
                                    157
                                ]
                            ],
                            [
                                "boy players",
                                [
                                    52, 163, 8, 122, 130, 55, 35
                                ]
                            ],
                            [
                                "unknown",
                                [
                                    141, 138, 144
                                ]
                            ]
                        ]
                    }
                ],
                [
                    "Troupe Country of Origin",
                    {
                        "t": "s",
                        "q": [
                            "SELECT DISTINCT pn.name, tr.id, tr.name",
                            "FROM ltbapp_placename AS pn, ltbapp_troupe AS tr",
                            "WHERE pn.id = tr.country_of_origin_id",
                            "ORDER BY pn.name, tr.name"
                        ],
                        "h": "Contains a list of the countries of origin of troupes.",
                        "i": [
                            [
                                "England",
                                [
                                    1, 157, 148, 52, 159, 139, 7, 111, 163, 155, 8, 122, 130, 55, 156, 158, 117, 127, 30, 154, 150, 25, 160, 145, 5, 137, 57, 16, 26, 141, 84, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 118, 132, 161, 153, 32, 35, 3, 152, 144
                                ]
                            ],
                            [
                                "France",
                                [
                                    103
                                ]
                            ],
                            [
                                "unknown",
                                [
                                    138
                                ]
                            ]
                        ]
                    }
                ],
                [
                    "Troupe Date",
                    {
                        "t": "n",
                        "q": [
                            "SELECT DISTINCT ltbapp_troupe.acdates_from_year, ltbapp_troupe.id, ltbapp_troupe.name",
                            "FROM ltbapp_troupe",
                            "ORDER BY ltbapp_troupe.acdates_from_year, ltbapp_troupe.name"
                        ],
                        "h": "",
                        "i": [
                            [
                                1378, [
                                    161
                                ]
                            ],
                            [
                                1501, [
                                    141
                                ]
                            ],
                            [
                                1526, [
                                    25
                                ]
                            ],
                            [
                                1557, [
                                    139
                                ]
                            ],
                            [
                                1558, [
                                    8, 2
                                ]
                            ],
                            [
                                1560, [
                                    26
                                ]
                            ],
                            [
                                1563, [
                                    35
                                ]
                            ],
                            [
                                1564, [
                                    32
                                ]
                            ],
                            [
                                1565, [
                                    160
                                ]
                            ],
                            [
                                1570, [
                                    1, 7, 111, 5, 9
                                ]
                            ],
                            [
                                1575, [
                                    118
                                ]
                            ],
                            [
                                1577, [
                                    30
                                ]
                            ],
                            [
                                1578, [
                                    132
                                ]
                            ],
                            [
                                1583, [
                                    3
                                ]
                            ],
                            [
                                1584, [
                                    148
                                ]
                            ],
                            [
                                1585, [
                                    84
                                ]
                            ],
                            [
                                1591, [
                                    61
                                ]
                            ],
                            [
                                1592, [
                                    4
                                ]
                            ],
                            [
                                1593, [
                                    14, 124
                                ]
                            ],
                            [
                                1594, [
                                    117
                                ]
                            ],
                            [
                                1598, [
                                    163
                                ]
                            ],
                            [
                                1599, [
                                    137
                                ]
                            ],
                            [
                                1600, [
                                    55
                                ]
                            ],
                            [
                                1601, [
                                    62
                                ]
                            ],
                            [
                                1602, [
                                    122
                                ]
                            ],
                            [
                                1603, [
                                    130
                                ]
                            ],
                            [
                                1605, [
                                    11
                                ]
                            ],
                            [
                                1608, [
                                    155
                                ]
                            ],
                            [
                                1609, [
                                    158, 153
                                ]
                            ],
                            [
                                1611, [
                                    16
                                ]
                            ],
                            [
                                1612, [
                                    156
                                ]
                            ],
                            [
                                1613, [
                                    157
                                ]
                            ],
                            [
                                1615, [
                                    144
                                ]
                            ],
                            [
                                1619, [
                                    15
                                ]
                            ],
                            [
                                1620, [
                                    12
                                ]
                            ],
                            [
                                1623, [
                                    48, 138
                                ]
                            ],
                            [
                                1624, [
                                    145, 140
                                ]
                            ],
                            [
                                1629, [
                                    154, 150, 57
                                ]
                            ],
                            [
                                1631, [
                                    152
                                ]
                            ],
                            [
                                1632, [
                                    52
                                ]
                            ],
                            [
                                1634, [
                                    159
                                ]
                            ],
                            [
                                1635, [
                                    103
                                ]
                            ],
                            [
                                1641, [
                                    127
                                ]
                            ]
                        ]
                    }
                ],
                [
                    "Venue Name",
                    {
                        "t": "s",
                        "q": [
                            "SELECT DISTINCT ve.name, tr.id, tr.name",
                            "FROM ltbapp_venue AS ve, ltbapp_troupe AS tr, ltbapp_ass_event_venues AS isev, ltbapp_ass_event_troupes AS iset",
                            "WHERE ve.id = isev.venue_id AND tr.id = iset.troupe_id AND isev.event_id = iset.event_id",
                            "ORDER BY ve.name, tr.name"
                        ],
                        "h": "Contains an alphabetical list of performance venues.",
                        "i": [
                            [
                                "Bear Garden",
                                [
                                    1, 52, 55, 5, 137, 16, 62, 11, 14, 15
                                ]
                            ],
                            [
                                "Bel Savage",
                                [
                                    2
                                ]
                            ],
                            [
                                "Bell",
                                [
                                    2
                                ]
                            ],
                            [
                                "Blackfriars (I)",
                                [
                                    8
                                ]
                            ],
                            [
                                "Blackfriars (II)",
                                [
                                    52, 159, 155, 8, 122, 55, 156, 154, 150, 5, 137, 57, 16, 62, 12, 11, 4, 14, 15, 2, 140
                                ]
                            ],
                            [
                                "Boar's Head",
                                [
                                    1, 111, 55, 117, 5, 84, 11, 14, 124, 3
                                ]
                            ],
                            [
                                "Boar's Head Inn",
                                [
                                    139
                                ]
                            ],
                            [
                                "Bull",
                                [
                                    2
                                ]
                            ],
                            [
                                "Cockpit at Court",
                                [
                                    52, 103, 137, 12, 15
                                ]
                            ],
                            [
                                "Court",
                                [
                                    25, 160, 5, 137, 11, 15, 32
                                ]
                            ],
                            [
                                "Cross Keys",
                                [
                                    1, 2, 9
                                ]
                            ],
                            [
                                "Curtain",
                                [
                                    1, 148, 111, 55, 5, 16, 84, 62, 11, 4, 14, 2, 124, 153, 3, 144
                                ]
                            ],
                            [
                                "Fortune (I)",
                                [
                                    1, 111, 55, 5, 84, 62, 11, 4, 14, 3
                                ]
                            ],
                            [
                                "Fortune (II)",
                                [
                                    52, 150, 137, 57, 16, 62, 12, 15, 140
                                ]
                            ],
                            [
                                "Globe (I)",
                                [
                                    1, 111, 55, 5, 137, 84, 11, 4, 14, 3
                                ]
                            ],
                            [
                                "Globe (II)",
                                [
                                    52, 8, 5, 137, 62, 12, 11, 14, 15, 2, 140
                                ]
                            ],
                            [
                                "Hope",
                                [
                                    1, 52, 55, 5, 137, 16, 62, 11, 14, 15
                                ]
                            ],
                            [
                                "Inns of Court",
                                [
                                    25, 160
                                ]
                            ],
                            [
                                "Newington Butts",
                                [
                                    1, 7, 2, 9, 132, 32
                                ]
                            ],
                            [
                                "Paris Garden",
                                [
                                    1
                                ]
                            ],
                            [
                                "Phoenix/Cockpit",
                                [
                                    52, 127, 103, 5, 137, 57, 16, 62, 12, 11, 14, 15, 48, 124, 140, 3
                                ]
                            ],
                            [
                                "playhouse",
                                [
                                    153
                                ]
                            ],
                            [
                                "Porter's Hall",
                                [
                                    55, 5, 16, 11
                                ]
                            ],
                            [
                                "Red Bull",
                                [
                                    52, 55, 103, 5, 137, 57, 16, 62, 12, 11, 14, 15, 124, 140, 138, 3, 144
                                ]
                            ],
                            [
                                "Rose",
                                [
                                    1, 7, 111, 16, 61, 14, 2, 124, 9, 132, 3
                                ]
                            ],
                            [
                                "Salisbury Court",
                                [
                                    52, 137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                "St Paul's (I)",
                                [
                                    111, 8, 30, 26, 2, 118, 161, 32, 35
                                ]
                            ],
                            [
                                "St Paul's (II)",
                                [
                                    163, 55
                                ]
                            ],
                            [
                                "Swan",
                                [
                                    1, 111, 137, 16, 61
                                ]
                            ],
                            [
                                "Theatre",
                                [
                                    148, 8, 5, 137, 2
                                ]
                            ],
                            [
                                "Whitefriars",
                                [
                                    157, 130, 55, 158, 5, 16, 11
                                ]
                            ]
                        ]
                    }
                ],
                [
                    "Venue Locale",
                    {
                        "t": "s",
                        "q": [
                            "SELECT DISTINCT vn.name, tr.id, tr.name",
                            "FROM ltbapp_troupe AS tr, ltbapp_venuename AS vn, ltbapp_venue_helper_m2mlocales AS m2m, ltbapp_ass_event_troupes AS iset, ltbapp_ass_event_venues AS isev",
                            "WHERE m2m.venuename_id = vn.id AND tr.id = iset.troupe_id AND isev.event_id = iset.event_id AND m2m.venue_id = isev.venue_id",
                            "ORDER BY vn.name, tr.name"
                        ],
                        "h": "Contains an alphabetical list of venue locations, ranging in extent from a structure to a county.",
                        "i": [
                            [
                                "All Hallows, Lombard Street",
                                [
                                    1, 2, 9
                                ]
                            ],
                            [
                                "Bear Garden",
                                [
                                    1, 52, 55, 5, 137, 16, 62, 11, 14, 15
                                ]
                            ],
                            [
                                "Bel Savage",
                                [
                                    2
                                ]
                            ],
                            [
                                "Bell",
                                [
                                    2
                                ]
                            ],
                            [
                                "Bishopsgate Street",
                                [
                                    2
                                ]
                            ],
                            [
                                "Blackfriars",
                                [
                                    52, 159, 155, 8, 122, 55, 156, 154, 150, 5, 137, 57, 16, 62, 12, 11, 4, 14, 15, 2, 140
                                ]
                            ],
                            [
                                "Blackfriars (I)",
                                [
                                    8
                                ]
                            ],
                            [
                                "Blackfriars (II)",
                                [
                                    52, 159, 155, 8, 122, 55, 156, 154, 150, 5, 137, 57, 16, 62, 12, 11, 4, 14, 15, 2, 140
                                ]
                            ],
                            [
                                "Boar's Head",
                                [
                                    1, 111, 55, 117, 5, 84, 11, 14, 124, 3
                                ]
                            ],
                            [
                                "Boar's Head Inn",
                                [
                                    139
                                ]
                            ],
                            [
                                "Bull",
                                [
                                    2
                                ]
                            ],
                            [
                                "Clerkenwell",
                                [
                                    52, 55, 103, 5, 137, 57, 16, 62, 12, 11, 14, 15, 124, 140, 138, 3, 144
                                ]
                            ],
                            [
                                "Cockpit at Court",
                                [
                                    52, 103, 137, 12, 15
                                ]
                            ],
                            [
                                "Court",
                                [
                                    25, 160, 5, 137, 11, 15, 32
                                ]
                            ],
                            [
                                "Cross Keys",
                                [
                                    1, 2, 9
                                ]
                            ],
                            [
                                "Curtain",
                                [
                                    1, 148, 111, 55, 5, 16, 84, 62, 11, 4, 14, 2, 124, 153, 3, 144
                                ]
                            ],
                            [
                                "Drury Lane",
                                [
                                    52, 127, 103, 5, 137, 57, 16, 62, 12, 11, 14, 15, 48, 124, 140, 3
                                ]
                            ],
                            [
                                "Farringdon Ward Without",
                                [
                                    52, 137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                "Fortune (I)",
                                [
                                    1, 111, 55, 5, 84, 62, 11, 4, 14, 3
                                ]
                            ],
                            [
                                "Fortune (II)",
                                [
                                    52, 150, 137, 57, 16, 62, 12, 15, 140
                                ]
                            ],
                            [
                                "Globe (I)",
                                [
                                    1, 111, 55, 5, 137, 84, 11, 4, 14, 3
                                ]
                            ],
                            [
                                "Globe (II)",
                                [
                                    52, 8, 5, 137, 62, 12, 11, 14, 15, 2, 140
                                ]
                            ],
                            [
                                "Golding Lane",
                                [
                                    1, 52, 111, 55, 150, 5, 137, 57, 16, 84, 62, 12, 11, 4, 14, 15, 140, 3
                                ]
                            ],
                            [
                                "Gracechurch Street",
                                [
                                    1, 2, 9
                                ]
                            ],
                            [
                                "Hope",
                                [
                                    1, 52, 55, 5, 137, 16, 62, 11, 14, 15
                                ]
                            ],
                            [
                                "Inns of Court",
                                [
                                    25, 160
                                ]
                            ],
                            [
                                "London",
                                [
                                    1, 157, 52, 159, 111, 163, 155, 8, 122, 130, 55, 156, 158, 30, 154, 150, 5, 137, 57, 16, 26, 62, 12, 11, 4, 14, 15, 2, 140, 9, 118, 161, 32, 35
                                ]
                            ],
                            [
                                "Ludgate Hill",
                                [
                                    2
                                ]
                            ],
                            [
                                "Maid Lane",
                                [
                                    1, 52, 55, 5, 137, 16, 62, 11, 14, 15
                                ]
                            ],
                            [
                                "Maiden Lane",
                                [
                                    1, 52, 7, 111, 8, 55, 5, 137, 16, 84, 62, 61, 12, 11, 4, 14, 15, 2, 124, 140, 9, 132, 3
                                ]
                            ],
                            [
                                "Middlesex",
                                [
                                    1, 148, 52, 139, 111, 8, 55, 117, 127, 150, 103, 25, 160, 5, 137, 57, 16, 84, 62, 12, 11, 4, 14, 15, 48, 2, 124, 140, 138, 153, 3, 144
                                ]
                            ],
                            [
                                "Newington",
                                [
                                    1, 7, 2, 9, 132, 32
                                ]
                            ],
                            [
                                "Newington Butts",
                                [
                                    1, 7, 2, 9, 132, 32
                                ]
                            ],
                            [
                                "Paris Garden",
                                [
                                    1, 52, 55, 5, 137, 16, 62, 11, 14, 15
                                ]
                            ],
                            [
                                "Phoenix/Cockpit",
                                [
                                    52, 127, 103, 5, 137, 57, 16, 62, 12, 11, 14, 15, 48, 124, 140, 3
                                ]
                            ],
                            [
                                "Porter's Hall",
                                [
                                    55, 5, 16, 11
                                ]
                            ],
                            [
                                "Puddle-wharf",
                                [
                                    55, 5, 16, 11
                                ]
                            ],
                            [
                                "Red Bull",
                                [
                                    52, 55, 103, 5, 137, 57, 16, 62, 12, 11, 14, 15, 124, 140, 138, 3, 144
                                ]
                            ],
                            [
                                "Rose",
                                [
                                    1, 7, 111, 16, 61, 14, 2, 124, 9, 132, 3
                                ]
                            ],
                            [
                                "Salisbury Court",
                                [
                                    52, 137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                "Shoreditch",
                                [
                                    1, 148, 111, 8, 55, 5, 137, 16, 84, 62, 11, 4, 14, 2, 124, 153, 3, 144
                                ]
                            ],
                            [
                                "Southwark",
                                [
                                    1, 52, 7, 111, 8, 55, 5, 137, 16, 84, 62, 61, 12, 11, 4, 14, 15, 2, 124, 140, 9, 132, 32, 3
                                ]
                            ],
                            [
                                "St Andrew by the Wardrobe",
                                [
                                    55, 5, 16, 11
                                ]
                            ],
                            [
                                "St Anne's",
                                [
                                    52, 159, 155, 8, 122, 55, 156, 154, 150, 5, 137, 57, 16, 62, 12, 11, 4, 14, 15, 2, 140
                                ]
                            ],
                            [
                                "St Bride's, Fleet Street",
                                [
                                    52, 137, 57, 12, 15, 2, 140
                                ]
                            ],
                            [
                                "St Ethelburga",
                                [
                                    2
                                ]
                            ],
                            [
                                "St Giles in the Fields",
                                [
                                    52, 127, 103, 5, 137, 57, 16, 62, 12, 11, 14, 15, 48, 124, 140, 3
                                ]
                            ],
                            [
                                "St Giles, Cripplegate",
                                [
                                    1, 52, 111, 55, 150, 5, 137, 57, 16, 84, 62, 12, 11, 4, 14, 15, 140, 3
                                ]
                            ],
                            [
                                "St Gregory by St Paul's",
                                [
                                    111, 163, 8, 55, 30, 26, 2, 118, 161, 32, 35
                                ]
                            ],
                            [
                                "St James, Clerkenwell",
                                [
                                    52, 55, 103, 5, 137, 57, 16, 62, 12, 11, 14, 15, 124, 140, 138, 3, 144
                                ]
                            ],
                            [
                                "St John Street",
                                [
                                    52, 55, 103, 5, 137, 57, 16, 62, 12, 11, 14, 15, 124, 140, 138, 3, 144
                                ]
                            ],
                            [
                                "St Leonard, Shoreditch",
                                [
                                    1, 148, 111, 8, 55, 5, 137, 16, 84, 62, 11, 4, 14, 2, 124, 153, 3, 144
                                ]
                            ],
                            [
                                "St Martin-in-the-Fields",
                                [
                                    52, 103, 137, 12, 15
                                ]
                            ],
                            [
                                "St Mary Matfellon, Whitechapel",
                                [
                                    1, 139, 111, 55, 117, 5, 84, 11, 14, 124, 3
                                ]
                            ],
                            [
                                "St Paul's (I)",
                                [
                                    111, 8, 30, 26, 2, 118, 161, 32, 35
                                ]
                            ],
                            [
                                "St Paul's (II)",
                                [
                                    163, 55
                                ]
                            ],
                            [
                                "St Saviour's",
                                [
                                    1, 52, 7, 111, 8, 55, 5, 137, 16, 84, 62, 61, 12, 11, 4, 14, 15, 2, 124, 140, 9, 132, 3
                                ]
                            ],
                            [
                                "Surrey",
                                [
                                    1, 52, 7, 111, 8, 55, 5, 137, 16, 84, 62, 61, 12, 11, 4, 14, 15, 2, 124, 140, 9, 132, 32, 3
                                ]
                            ],
                            [
                                "Swan",
                                [
                                    1, 111, 137, 16, 61
                                ]
                            ],
                            [
                                "Theatre",
                                [
                                    148, 8, 5, 137, 2
                                ]
                            ],
                            [
                                "Water Lane",
                                [
                                    52, 137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                "Westminster",
                                [
                                    52, 103, 137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                "Whitechapel",
                                [
                                    1, 139, 111, 55, 117, 5, 84, 11, 14, 124, 3
                                ]
                            ],
                            [
                                "Whitefriars",
                                [
                                    157, 130, 55, 158, 5, 16, 11
                                ]
                            ],
                            [
                                "Whitehall",
                                [
                                    52, 103, 137, 12, 15
                                ]
                            ]
                        ]
                    }
                ],
                [
                    "Venue Date",
                    {
                        "t": "n",
                        "q": [
                            "SELECT DISTINCT ve.opyears_from_year, tr.id, tr.name",
                            "FROM ltbapp_troupe AS tr, ltbapp_venue AS ve, ltbapp_ass_event_venues AS isev, ltbapp_ass_event_troupes AS iset",
                            "WHERE ve.id = isev.venue_id AND tr.id = iset.troupe_id AND isev.event_id = iset.event_id",
                            "ORDER BY ve.opyears_from_year, tr.name"
                        ],
                        "h": "",
                        "i": [
                            [
                                23, [
                                    148, 8, 5, 137, 2
                                ]
                            ],
                            [
                                1378, [
                                    111, 8, 30, 26, 2, 118, 161, 32, 35
                                ]
                            ],
                            [
                                1526, [
                                    25, 160
                                ]
                            ],
                            [
                                1537, [
                                    1, 52, 7, 111, 55, 5, 137, 16, 62, 61, 11, 14, 15, 2, 124, 9, 132, 3
                                ]
                            ],
                            [
                                1546, [
                                    52, 159, 155, 8, 122, 55, 156, 154, 150, 5, 137, 57, 16, 62, 12, 11, 4, 14, 15, 2, 140
                                ]
                            ],
                            [
                                1552, [
                                    25, 160, 5, 137, 11, 15, 32
                                ]
                            ],
                            [
                                1554, [
                                    163, 55
                                ]
                            ],
                            [
                                1555, [
                                    1
                                ]
                            ],
                            [
                                1557, [
                                    139
                                ]
                            ],
                            [
                                1567, [
                                    1, 148, 111, 55, 5, 16, 84, 62, 11, 4, 14, 2, 124, 153, 3, 144
                                ]
                            ],
                            [
                                1569, [
                                    1, 157, 52, 7, 111, 8, 130, 55, 158, 117, 127, 150, 103, 5, 137, 57, 16, 84, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 138, 132, 32, 3, 144
                                ]
                            ],
                            [
                                1570, [
                                    1, 2, 9
                                ]
                            ],
                            [
                                1576, [
                                    153
                                ]
                            ],
                            [
                                1604, [
                                    52, 103, 137, 12, 15
                                ]
                            ],
                            [
                                1613, [
                                    55, 5, 16, 11
                                ]
                            ]
                        ]
                    }
                ]
            ]
        ],
        [
            "Citation",
            "This category contains facets classifying EMLoT's secondary (post-1642) sources.",
            [
                [
                    "Citation Type",
                    {
                        "t": "s",
                        "q": [
                            "SELECT DISTINCT ct.name, tr.id, tr.name",
                            "FROM ltbapp_troupe AS tr, ltbapp_document AS doc, ltbapp_ass_event_troupes AS iset, ltbapp_record AS rec, ltbapp_record_helper_documents AS isrd, ltbapp_citationtype AS ct",
                            "WHERE ct.id = doc.citationtype_id AND doc.id = isrd.document_id AND rec.id = isrd.record_id AND tr.id = iset.troupe_id AND rec.event_id = iset.event_id",
                            "ORDER BY ct.name, tr.name"
                        ],
                        "h": "Contains a list of types of secondary sources, from manuscripts to books.",
                        "i": [
                            [
                                "article",
                                [
                                    52, 111, 163, 8, 130, 55, 158, 5, 137, 57, 16, 141, 61, 12, 11, 4, 14, 15, 2, 124, 32, 3
                                ]
                            ],
                            [
                                "book",
                                [
                                    1, 157, 148, 52, 159, 139, 7, 111, 163, 155, 8, 122, 130, 55, 156, 158, 117, 127, 30, 154, 150, 103, 25, 160, 5, 137, 57, 16, 26, 141, 84, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 138, 118, 132, 161, 153, 32, 35, 3, 144
                                ]
                            ],
                            [
                                "book section",
                                [
                                    1, 148, 52, 111, 163, 8, 122, 55, 127, 154, 150, 103, 145, 5, 137, 57, 16, 84, 62, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 138, 3
                                ]
                            ],
                            [
                                "manuscript",
                                [
                                    1, 157, 148, 52, 159, 139, 7, 111, 163, 8, 122, 130, 55, 156, 158, 127, 30, 154, 150, 103, 25, 160, 145, 5, 137, 57, 16, 26, 141, 84, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 138, 118, 132, 161, 153, 32, 35, 3, 152
                                ]
                            ],
                            [
                                "print",
                                [
                                    5, 137
                                ]
                            ]
                        ]
                    }
                ],
                [
                    "Primary Author Type",
                    {
                        "t": "s",
                        "q": [
                            "SELECT DISTINCT at.name, tr.id, tr.name",
                            "FROM ltbapp_authortype AS at, ltbapp_ass_event_troupes AS iset, ltbapp_record AS rec, ltbapp_record_helper_documents AS isrd, ltbapp_docauthors AS isda, ltbapp_troupe AS tr",
                            "WHERE at.id = isda.auth_type_id AND rec.id = isrd.record_id AND isda.document_id = isrd.document_id AND tr.id = iset.troupe_id AND rec.event_id = iset.event_id",
                            "ORDER BY at.name, tr.name"
                        ],
                        "h": "Contains a list of roles of primary producers of secondary sources.",
                        "i": [
                            [
                                "compiler",
                                [
                                    52, 25, 160, 5, 137, 57, 16, 62, 12, 11, 14, 15, 48, 124, 140, 138, 153, 152
                                ]
                            ],
                            [
                                "editor",
                                [
                                    1, 148, 52, 139, 7, 111, 163, 8, 122, 130, 55, 156, 158, 127, 30, 154, 103, 145, 5, 137, 57, 16, 26, 141, 84, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 118, 132, 32, 35, 3, 144
                                ]
                            ],
                            [
                                "illustrator",
                                [
                                    1, 139, 111, 117, 84, 14, 3
                                ]
                            ]
                        ]
                    }
                ],
                [
                    "Secondary Author Type",
                    {
                        "t": "s",
                        "q": [
                            "SELECT DISTINCT at.name, tr.id, tr.name",
                            "FROM ltbapp_record_helper_documents AS isrd, ltbapp_authortype AS at, ltbapp_docsecauthors AS isdSa, ltbapp_troupe AS tr, ltbapp_record AS rec, ltbapp_ass_event_troupes AS iset",
                            "WHERE at.id = isdSa.secauth_type_id AND rec.id = isrd.record_id AND tr.id = iset.troupe_id AND rec.event_id = iset.event_id AND isdSa.document_id = isrd.document_id",
                            "ORDER BY at.name, tr.name"
                        ],
                        "h": "Contains a list of roles of secondary producers of secondary sources.",
                        "i": [
                            [
                                "assistant",
                                [
                                    122
                                ]
                            ],
                            [
                                "editor",
                                [
                                    1, 157, 52, 7, 122, 55, 150, 103, 25, 160, 5, 137, 57, 16, 62, 61, 12, 11, 4, 14, 15, 2, 124, 140, 138, 132, 3
                                ]
                            ],
                            [
                                "reviser",
                                [
                                    5
                                ]
                            ]
                        ]
                    }
                ],
                [
                    "Author Name",
                    {
                        "t": "s",
                        "q": [
                            "SELECT DISTINCT pe.surname, tr.id, tr.name",
                            "FROM ltbapp_document_helper_m2mauthors AS m2ma, ltbapp_ass_event_troupes AS iset, ltbapp_record_helper_documents AS isrd, ltbapp_person AS pe, ltbapp_record AS rec, ltbapp_troupe AS tr",
                            "WHERE pe.id = m2ma.person_id AND rec.id = isrd.record_id AND m2ma.document_id = isrd.document_id AND tr.id = iset.troupe_id AND rec.event_id = iset.event_id",
                            "ORDER BY pe.surname, tr.name"
                        ],
                        "h": "Contains an alphabetical list of published primary and secondary source author surnames.",
                        "i": [
                            [
                                "Anglo",
                                [
                                    141
                                ]
                            ],
                            [
                                "Armstrong",
                                [
                                    52, 15
                                ]
                            ],
                            [
                                "Austern",
                                [
                                    163
                                ]
                            ],
                            [
                                "Bald",
                                [
                                    5
                                ]
                            ],
                            [
                                "Bawcutt",
                                [
                                    52, 5, 137, 57, 12, 11, 15
                                ]
                            ],
                            [
                                "Beaumont",
                                [
                                    163, 5, 137, 14
                                ]
                            ],
                            [
                                "Beeston",
                                [
                                    52
                                ]
                            ],
                            [
                                "Bentley",
                                [
                                    55, 5, 137, 57, 16, 12, 14, 15, 124, 3
                                ]
                            ],
                            [
                                "Berry",
                                [
                                    1, 148, 52, 139, 7, 111, 163, 8, 122, 130, 55, 156, 158, 117, 127, 30, 154, 5, 137, 57, 16, 26, 141, 84, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 118, 132, 32, 3, 144
                                ]
                            ],
                            [
                                "Birch",
                                [
                                    25, 160, 5, 57, 14
                                ]
                            ],
                            [
                                "Boswell",
                                [
                                    52, 8, 55, 127, 150, 103, 145, 5, 137, 57, 16, 62, 12, 11, 4, 14, 15, 48, 2, 124, 140, 138
                                ]
                            ],
                            [
                                "Braunmuller",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "Brock",
                                [
                                    52, 5, 137, 61
                                ]
                            ],
                            [
                                "Brome",
                                [
                                    52, 137, 57, 15
                                ]
                            ],
                            [
                                "Buck",
                                [
                                    14, 2
                                ]
                            ],
                            [
                                "Burn",
                                [
                                    52, 5, 137, 16, 62, 12, 11, 15, 48, 124, 140, 138, 153, 152
                                ]
                            ],
                            [
                                "Burney",
                                [
                                    159
                                ]
                            ],
                            [
                                "Carew",
                                [
                                    137, 15, 140
                                ]
                            ],
                            [
                                "Carlell",
                                [
                                    137
                                ]
                            ],
                            [
                                "Cartwright",
                                [
                                    137
                                ]
                            ],
                            [
                                "Chalmers",
                                [
                                    1, 52, 139, 111, 8, 30, 103, 25, 160, 5, 137, 57, 16, 26, 62, 12, 11, 4, 14, 15, 48, 2, 124, 138, 118, 153, 32, 35, 3
                                ]
                            ],
                            [
                                "Chamberlain",
                                [
                                    111, 25, 160, 5, 62, 11, 14
                                ]
                            ],
                            [
                                "Chambers",
                                [
                                    1, 148, 52, 7, 111, 163, 8, 122, 55, 158, 117, 127, 103, 145, 5, 137, 57, 16, 26, 84, 12, 11, 4, 14, 15, 48, 2, 140, 9, 32, 3
                                ]
                            ],
                            [
                                "Chapman",
                                [
                                    1, 163, 55, 5, 137
                                ]
                            ],
                            [
                                "Chetwood",
                                [
                                    163, 14, 9
                                ]
                            ],
                            [
                                "Cole",
                                [
                                    5
                                ]
                            ],
                            [
                                "Collier",
                                [
                                    1, 148, 52, 139, 111, 163, 155, 122, 55, 154, 150, 103, 25, 160, 5, 137, 16, 26, 84, 62, 61, 12, 11, 4, 14, 15, 2, 124, 140, 9, 138, 153, 32, 35, 3, 144
                                ]
                            ],
                            [
                                "Colman",
                                [
                                    5, 14
                                ]
                            ],
                            [
                                "Condell",
                                [
                                    111, 5
                                ]
                            ],
                            [
                                "Conway",
                                [
                                    5
                                ]
                            ],
                            [
                                "Cook",
                                [
                                    11
                                ]
                            ],
                            [
                                "Cooke",
                                [
                                    14
                                ]
                            ],
                            [
                                "Coxeter",
                                [
                                    5, 137, 16, 15
                                ]
                            ],
                            [
                                "Crashaw",
                                [
                                    163
                                ]
                            ],
                            [
                                "Crosfield",
                                [
                                    137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                "Cumber",
                                [
                                    124
                                ]
                            ],
                            [
                                "Cunningham",
                                [
                                    15
                                ]
                            ],
                            [
                                "d'Avenant",
                                [
                                    5, 137, 15, 140
                                ]
                            ],
                            [
                                "Dasent",
                                [
                                    1, 111, 8, 30, 26, 14, 118, 32
                                ]
                            ],
                            [
                                "Davenport",
                                [
                                    15
                                ]
                            ],
                            [
                                "Daw",
                                [
                                    11
                                ]
                            ],
                            [
                                "Day",
                                [
                                    156, 4, 14
                                ]
                            ],
                            [
                                "Dekker",
                                [
                                    1, 111, 163, 55, 4, 14, 15, 153
                                ]
                            ],
                            [
                                "DeMolen",
                                [
                                    8
                                ]
                            ],
                            [
                                "Digges",
                                [
                                    137, 12
                                ]
                            ],
                            [
                                "Dodsley",
                                [
                                    163, 8, 55, 5, 137, 61, 4, 14, 15, 124, 132
                                ]
                            ],
                            [
                                "Draper",
                                [
                                    5
                                ]
                            ],
                            [
                                "Dugdale",
                                [
                                    1, 111, 5, 4, 14, 3
                                ]
                            ],
                            [
                                "Eccles",
                                [
                                    14
                                ]
                            ],
                            [
                                "Feil",
                                [
                                    137
                                ]
                            ],
                            [
                                "Fennor",
                                [
                                    16
                                ]
                            ],
                            [
                                "Feuillerat",
                                [
                                    35
                                ]
                            ],
                            [
                                "Feyerabend",
                                [
                                    55, 5
                                ]
                            ],
                            [
                                "Field",
                                [
                                    55, 5, 137, 16, 11, 4
                                ]
                            ],
                            [
                                "Fleay",
                                [
                                    8, 55, 156, 5, 137
                                ]
                            ],
                            [
                                "Fletcher",
                                [
                                    163, 5, 137, 14
                                ]
                            ],
                            [
                                "Foakes",
                                [
                                    1, 7, 61, 4, 2, 132, 3
                                ]
                            ],
                            [
                                "Ford",
                                [
                                    15
                                ]
                            ],
                            [
                                "Frost",
                                [
                                    137, 12
                                ]
                            ],
                            [
                                "Gair",
                                [
                                    163
                                ]
                            ],
                            [
                                "Giese",
                                [
                                    11
                                ]
                            ],
                            [
                                "Gifford",
                                [
                                    124
                                ]
                            ],
                            [
                                "Glapthorne",
                                [
                                    52
                                ]
                            ],
                            [
                                "Greene",
                                [
                                    1, 2
                                ]
                            ],
                            [
                                "Greenstreet",
                                [
                                    14, 124
                                ]
                            ],
                            [
                                "Greg",
                                [
                                    1, 148, 52, 111, 55, 5, 137, 16, 84, 62, 12, 11, 4, 14, 15, 2, 9, 3
                                ]
                            ],
                            [
                                "Grosart",
                                [
                                    2
                                ]
                            ],
                            [
                                "Guilpin",
                                [
                                    1
                                ]
                            ],
                            [
                                "Haaker",
                                [
                                    52, 12, 15
                                ]
                            ],
                            [
                                "Hall",
                                [
                                    25
                                ]
                            ],
                            [
                                "Halliwell-Phillipps",
                                [
                                    1, 8, 5, 137, 62, 61, 12, 14, 2
                                ]
                            ],
                            [
                                "Hammer",
                                [
                                    111
                                ]
                            ],
                            [
                                "Hawkins",
                                [
                                    14
                                ]
                            ],
                            [
                                "Heminges",
                                [
                                    111, 5
                                ]
                            ],
                            [
                                "Henslowe",
                                [
                                    1, 7, 55, 16, 62, 61, 11, 4, 2, 132, 3
                                ]
                            ],
                            [
                                "Herbert",
                                [
                                    52, 150, 103, 5, 137, 57, 16, 62, 12, 11, 15, 48, 124, 140, 138, 153, 152
                                ]
                            ],
                            [
                                "Heron",
                                [
                                    141
                                ]
                            ],
                            [
                                "Heywood",
                                [
                                    14, 15
                                ]
                            ],
                            [
                                "Hibbard",
                                [
                                    163
                                ]
                            ],
                            [
                                "Hillebrand",
                                [
                                    163, 8, 130, 55
                                ]
                            ],
                            [
                                "Hodges",
                                [
                                    1, 139, 111, 117, 84, 14, 3
                                ]
                            ],
                            [
                                "Honigmann",
                                [
                                    52, 5, 137, 61
                                ]
                            ],
                            [
                                "Hotson",
                                [
                                    14
                                ]
                            ],
                            [
                                "Howard-Hill",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "Howes",
                                [
                                    14, 2
                                ]
                            ],
                            [
                                "Ingleby",
                                [
                                    5
                                ]
                            ],
                            [
                                "Ingram",
                                [
                                    1, 148, 52, 139, 7, 111, 163, 8, 122, 130, 55, 156, 158, 127, 30, 154, 5, 137, 57, 16, 26, 141, 84, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 118, 132, 32, 3, 144
                                ]
                            ],
                            [
                                "Jeaffreson",
                                [
                                    124
                                ]
                            ],
                            [
                                "Jonson",
                                [
                                    111, 163, 155, 55, 5, 137, 16
                                ]
                            ],
                            [
                                "Kathman",
                                [
                                    137
                                ]
                            ],
                            [
                                "Knowler",
                                [
                                    137
                                ]
                            ],
                            [
                                "Langbaine",
                                [
                                    111, 163, 55, 156, 5, 137, 57, 16, 11, 4, 14, 15
                                ]
                            ],
                            [
                                "Lavagnino",
                                [
                                    5
                                ]
                            ],
                            [
                                "Lyly",
                                [
                                    163, 8
                                ]
                            ],
                            [
                                "Malone",
                                [
                                    1, 52, 55, 154, 150, 103, 5, 137, 57, 16, 62, 12, 11, 15, 124, 140, 138
                                ]
                            ],
                            [
                                "Markham",
                                [
                                    124
                                ]
                            ],
                            [
                                "Marlowe",
                                [
                                    1, 61, 14, 15
                                ]
                            ],
                            [
                                "Marmion",
                                [
                                    12, 15
                                ]
                            ],
                            [
                                "Marston",
                                [
                                    163, 55, 5
                                ]
                            ],
                            [
                                "Mason",
                                [
                                    5, 137, 16, 15
                                ]
                            ],
                            [
                                "Massinger",
                                [
                                    5, 137, 16, 15, 124
                                ]
                            ],
                            [
                                "May",
                                [
                                    124
                                ]
                            ],
                            [
                                "McClure",
                                [
                                    25, 160, 5, 62, 11, 14
                                ]
                            ],
                            [
                                "McDonnell",
                                [
                                    163
                                ]
                            ],
                            [
                                "Middleton",
                                [
                                    163, 5, 16, 4, 15
                                ]
                            ],
                            [
                                "Munro",
                                [
                                    5
                                ]
                            ],
                            [
                                "Nabbes",
                                [
                                    15
                                ]
                            ],
                            [
                                "Nashe",
                                [
                                    2
                                ]
                            ],
                            [
                                "Nethersole",
                                [
                                    5
                                ]
                            ],
                            [
                                "Nichols",
                                [
                                    25, 160
                                ]
                            ],
                            [
                                "Nicoll",
                                [
                                    52, 8, 127, 103, 145, 5, 137, 57, 12, 11, 4, 14, 15, 48, 2, 140
                                ]
                            ],
                            [
                                "Orrell",
                                [
                                    5
                                ]
                            ],
                            [
                                "Peele",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "Pory",
                                [
                                    137
                                ]
                            ],
                            [
                                "Powell",
                                [
                                    122
                                ]
                            ],
                            [
                                "Prynne",
                                [
                                    154
                                ]
                            ],
                            [
                                "Ravenscroft",
                                [
                                    163
                                ]
                            ],
                            [
                                "Reed",
                                [
                                    163, 8, 55, 5, 137, 61, 4, 14, 15, 124, 132
                                ]
                            ],
                            [
                                "Riccoboni",
                                [
                                    5, 161
                                ]
                            ],
                            [
                                "Rickert",
                                [
                                    1, 7, 61, 4, 2, 132, 3
                                ]
                            ],
                            [
                                "Rimbault",
                                [
                                    57
                                ]
                            ],
                            [
                                "Roberts",
                                [
                                    163
                                ]
                            ],
                            [
                                "Rowlands",
                                [
                                    1
                                ]
                            ],
                            [
                                "Rowley",
                                [
                                    16, 14, 15
                                ]
                            ],
                            [
                                "Rutter",
                                [
                                    1, 7, 111, 5, 26, 84, 61, 4, 14, 2, 9, 132, 3
                                ]
                            ],
                            [
                                "Rye",
                                [
                                    55, 5
                                ]
                            ],
                            [
                                "Rymer",
                                [
                                    5
                                ]
                            ],
                            [
                                "S.",
                                [
                                    111
                                ]
                            ],
                            [
                                "Sampson",
                                [
                                    124
                                ]
                            ],
                            [
                                "Shakespeare",
                                [
                                    52, 111, 55, 5, 137, 16, 61, 12, 11, 124, 140
                                ]
                            ],
                            [
                                "Sherburne",
                                [
                                    14
                                ]
                            ],
                            [
                                "Shirley",
                                [
                                    15
                                ]
                            ],
                            [
                                "Simpson",
                                [
                                    14, 15, 2
                                ]
                            ],
                            [
                                "Sisson",
                                [
                                    163, 3
                                ]
                            ],
                            [
                                "Smith",
                                [
                                    5, 144
                                ]
                            ],
                            [
                                "Stopes",
                                [
                                    8, 5, 137, 2
                                ]
                            ],
                            [
                                "Stow",
                                [
                                    14, 2
                                ]
                            ],
                            [
                                "Suckling",
                                [
                                    137
                                ]
                            ],
                            [
                                "Tatham",
                                [
                                    137, 12, 140
                                ]
                            ],
                            [
                                "Taylor",
                                [
                                    5, 16
                                ]
                            ],
                            [
                                "the bear",
                                [
                                    5
                                ]
                            ],
                            [
                                "Tomlins",
                                [
                                    4
                                ]
                            ],
                            [
                                "Tourneur",
                                [
                                    5
                                ]
                            ],
                            [
                                "Turner",
                                [
                                    5
                                ]
                            ],
                            [
                                "von B\u00fclow",
                                [
                                    122
                                ]
                            ],
                            [
                                "von Hessen-Cassel",
                                [
                                    55, 5
                                ]
                            ],
                            [
                                "Wallace",
                                [
                                    111, 8, 55, 5, 137, 16, 61, 11, 4, 14, 124
                                ]
                            ],
                            [
                                "Walton",
                                [
                                    157, 5
                                ]
                            ],
                            [
                                "Warton",
                                [
                                    163, 5, 2
                                ]
                            ],
                            [
                                "Webster",
                                [
                                    1, 5, 14, 15
                                ]
                            ],
                            [
                                "Wentworth",
                                [
                                    137
                                ]
                            ],
                            [
                                "Whalley",
                                [
                                    5
                                ]
                            ],
                            [
                                "Wickham",
                                [
                                    1, 148, 52, 139, 7, 111, 163, 8, 122, 130, 55, 156, 158, 127, 30, 154, 5, 137, 57, 16, 26, 141, 84, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 118, 132, 32, 3, 144
                                ]
                            ],
                            [
                                "Wilkins",
                                [
                                    5, 137, 14
                                ]
                            ],
                            [
                                "Williams",
                                [
                                    25, 160, 5, 57, 14
                                ]
                            ],
                            [
                                "Wilson",
                                [
                                    5, 11, 9
                                ]
                            ],
                            [
                                "Wotton",
                                [
                                    157, 5
                                ]
                            ],
                            [
                                "Wright",
                                [
                                    2
                                ]
                            ]
                        ]
                    }
                ],
                [
                    "Publisher",
                    {
                        "t": "s",
                        "q": [
                            "SELECT DISTINCT pub.name, tr.id, tr.name",
                            "FROM ltbapp_record AS rec, ltbapp_ass_event_troupes AS iset, ltbapp_docpublisher AS isdp, ltbapp_record_helper_documents AS isrd, ltbapp_troupe AS tr, ltbapp_publisher AS pub",
                            "WHERE pub.id = isdp.publisher_id AND rec.id = isrd.record_id AND isdp.document_id = isrd.document_id AND tr.id = iset.troupe_id AND rec.event_id = iset.event_id",
                            "ORDER BY pub.name, tr.name"
                        ],
                        "h": "Contains an alphabetical list of publishers of primary and secondary sources.",
                        "i": [
                            [
                                "A. H. Bullen",
                                [
                                    1, 55, 16, 62, 11
                                ]
                            ],
                            [
                                "A. I.",
                                [
                                    163
                                ]
                            ],
                            [
                                "A. J.",
                                [
                                    1, 2
                                ]
                            ],
                            [
                                "A. M.",
                                [
                                    5, 137, 15
                                ]
                            ],
                            [
                                "A. Moring",
                                [
                                    8, 5, 137, 2
                                ]
                            ],
                            [
                                "A. Uystpruyst",
                                [
                                    35
                                ]
                            ],
                            [
                                "American Philosophical Society",
                                [
                                    25, 160, 5, 62, 11, 14
                                ]
                            ],
                            [
                                "AMS",
                                [
                                    5, 137, 3
                                ]
                            ],
                            [
                                "Andrew Crooke",
                                [
                                    15
                                ]
                            ],
                            [
                                "Andrew Pennycuicke",
                                [
                                    5, 15
                                ]
                            ],
                            [
                                "Arthur Johnson",
                                [
                                    5
                                ]
                            ],
                            [
                                "Augustine Mathewes",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "Augustine Mathews",
                                [
                                    124
                                ]
                            ],
                            [
                                "B. A.",
                                [
                                    5
                                ]
                            ],
                            [
                                "B. Alsop",
                                [
                                    15
                                ]
                            ],
                            [
                                "B. Law",
                                [
                                    1, 154, 150, 12, 140
                                ]
                            ],
                            [
                                "B. White and Son",
                                [
                                    140
                                ]
                            ],
                            [
                                "Bartholomew Sutton",
                                [
                                    155
                                ]
                            ],
                            [
                                "Bernard Alsop",
                                [
                                    124
                                ]
                            ],
                            [
                                "Burt Franklin",
                                [
                                    62
                                ]
                            ],
                            [
                                "By H. L[ownes] for Mathew Lownes: and are to be solde at his shop in Paules Churchyard, at the signe of  the Bishops head",
                                [
                                    163
                                ]
                            ],
                            [
                                "C. Bathurst",
                                [
                                    5
                                ]
                            ],
                            [
                                "C. Dilly",
                                [
                                    1, 154, 150, 12, 140
                                ]
                            ],
                            [
                                "C. Hitch and L. Hawes",
                                [
                                    5
                                ]
                            ],
                            [
                                "C. Stalker",
                                [
                                    140
                                ]
                            ],
                            [
                                "Cadell and Davies",
                                [
                                    124
                                ]
                            ],
                            [
                                "Cambridge University Press",
                                [
                                    1, 148, 52, 139, 7, 111, 163, 8, 122, 130, 55, 156, 158, 127, 30, 154, 5, 137, 57, 16, 26, 141, 84, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 118, 132, 32, 3, 144
                                ]
                            ],
                            [
                                "Chapman and Hall",
                                [
                                    163
                                ]
                            ],
                            [
                                "Charles Greene",
                                [
                                    15
                                ]
                            ],
                            [
                                "Chatto and Windus",
                                [
                                    5
                                ]
                            ],
                            [
                                "Clarendon Press",
                                [
                                    1, 52, 7, 111, 163, 8, 122, 55, 158, 117, 5, 137, 57, 16, 26, 12, 11, 4, 14, 15, 2, 32, 3
                                ]
                            ],
                            [
                                "Columbia University Press",
                                [
                                    8
                                ]
                            ],
                            [
                                "Cornell University Press",
                                [
                                    139, 8, 5, 137, 32
                                ]
                            ],
                            [
                                "Cuthbert Burbie",
                                [
                                    61
                                ]
                            ],
                            [
                                "Cuthbert Burby",
                                [
                                    132
                                ]
                            ],
                            [
                                "D. Browne",
                                [
                                    5
                                ]
                            ],
                            [
                                "D. Midwinter",
                                [
                                    5
                                ]
                            ],
                            [
                                "E. A.",
                                [
                                    154, 14, 153
                                ]
                            ],
                            [
                                "E. Brewster",
                                [
                                    111, 55, 5, 137, 16
                                ]
                            ],
                            [
                                "E. G.",
                                [
                                    137
                                ]
                            ],
                            [
                                "E. Newbery",
                                [
                                    1, 154, 150, 12, 140
                                ]
                            ],
                            [
                                "E. P.",
                                [
                                    15
                                ]
                            ],
                            [
                                "E.P. Dutton & Co",
                                [
                                    25, 160
                                ]
                            ],
                            [
                                "Ed. Blount",
                                [
                                    111, 5
                                ]
                            ],
                            [
                                "Edw: Allde",
                                [
                                    163
                                ]
                            ],
                            [
                                "Edward Allde",
                                [
                                    163
                                ]
                            ],
                            [
                                "Edward Blackmore",
                                [
                                    5
                                ]
                            ],
                            [
                                "Edward Marchant",
                                [
                                    14
                                ]
                            ],
                            [
                                "Edward White",
                                [
                                    111
                                ]
                            ],
                            [
                                "Elliot Stock",
                                [
                                    14, 15
                                ]
                            ],
                            [
                                "F. E.",
                                [
                                    15
                                ]
                            ],
                            [
                                "F. K.",
                                [
                                    15
                                ]
                            ],
                            [
                                "F. T.",
                                [
                                    157, 5
                                ]
                            ],
                            [
                                "F. Tyton",
                                [
                                    157, 5
                                ]
                            ],
                            [
                                "F.C. and J. Rivington",
                                [
                                    52, 55, 150, 103, 5, 137, 57, 16, 62, 12, 11, 15, 124, 140, 138
                                ]
                            ],
                            [
                                "Folger Shakespeare Library",
                                [
                                    1, 139, 111, 117, 84, 14, 3
                                ]
                            ],
                            [
                                "Francis Constable",
                                [
                                    52, 5, 137, 57, 16, 15
                                ]
                            ],
                            [
                                "Francis Falkner",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "G. and T. Wilkie",
                                [
                                    1, 154, 150, 12, 140
                                ]
                            ],
                            [
                                "G. and W. Nicol",
                                [
                                    124
                                ]
                            ],
                            [
                                "G. Conyers",
                                [
                                    111, 55, 5, 137, 16
                                ]
                            ],
                            [
                                "G. Croom",
                                [
                                    2
                                ]
                            ],
                            [
                                "G. Eld",
                                [
                                    16, 11, 4, 124
                                ]
                            ],
                            [
                                "G. Faulkner",
                                [
                                    4
                                ]
                            ],
                            [
                                "G.G.J. and J. Robinson",
                                [
                                    1, 159, 154, 150, 12, 140
                                ]
                            ],
                            [
                                "George Eld",
                                [
                                    163, 5
                                ]
                            ],
                            [
                                "George Vincent",
                                [
                                    5
                                ]
                            ],
                            [
                                "George West",
                                [
                                    111, 163, 55, 156, 5, 137, 57, 16, 11, 4, 14, 15
                                ]
                            ],
                            [
                                "H. Baldwin",
                                [
                                    1, 154, 150, 12, 140
                                ]
                            ],
                            [
                                "H. Herringman",
                                [
                                    111, 55, 5, 137, 16
                                ]
                            ],
                            [
                                "H. L. Gardner",
                                [
                                    140
                                ]
                            ],
                            [
                                "H. Lownes",
                                [
                                    163
                                ]
                            ],
                            [
                                "H. Payne",
                                [
                                    5, 137, 16, 15
                                ]
                            ],
                            [
                                "H.S. Woodfall",
                                [
                                    1, 154, 150, 12, 140
                                ]
                            ],
                            [
                                "Harvard University Press",
                                [
                                    61, 14, 3
                                ]
                            ],
                            [
                                "Hazell",
                                [
                                    2
                                ]
                            ],
                            [
                                "Henry Ballard",
                                [
                                    163
                                ]
                            ],
                            [
                                "Henry Bell",
                                [
                                    14
                                ]
                            ],
                            [
                                "Henry Clements",
                                [
                                    111, 163, 55, 156, 5, 137, 57, 16, 11, 4, 14, 15
                                ]
                            ],
                            [
                                "Henry Colburn",
                                [
                                    25, 160, 5, 57, 14
                                ]
                            ],
                            [
                                "Henry Dell",
                                [
                                    5, 137, 16, 15
                                ]
                            ],
                            [
                                "Henry Herringman",
                                [
                                    5
                                ]
                            ],
                            [
                                "Henry Rocket",
                                [
                                    163
                                ]
                            ],
                            [
                                "Henry Seyle",
                                [
                                    15
                                ]
                            ],
                            [
                                "His Majesty's Stationery Office",
                                [
                                    1, 111, 8, 30, 26, 14, 118, 32
                                ]
                            ],
                            [
                                "Hugh Perry",
                                [
                                    15
                                ]
                            ],
                            [
                                "Humphrey Moseley",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "I. N.",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "Isaac Jaggard",
                                [
                                    111, 5, 14
                                ]
                            ],
                            [
                                "Isaac Jaggard and Edward Blount",
                                [
                                    111, 5
                                ]
                            ],
                            [
                                "J. and R. Tonson",
                                [
                                    5
                                ]
                            ],
                            [
                                "J. B.",
                                [
                                    163, 5, 137, 16, 12, 14, 15
                                ]
                            ],
                            [
                                "J. Barker",
                                [
                                    124, 140
                                ]
                            ],
                            [
                                "J. Bew",
                                [
                                    1, 154, 150, 12, 140
                                ]
                            ],
                            [
                                "J. Cuthell",
                                [
                                    1, 154, 150, 12, 140
                                ]
                            ],
                            [
                                "J. Dodsley",
                                [
                                    163, 8, 55, 5, 137, 61, 4, 14, 15, 2, 124, 132
                                ]
                            ],
                            [
                                "J. Edwards",
                                [
                                    140
                                ]
                            ],
                            [
                                "J. Faulder",
                                [
                                    124
                                ]
                            ],
                            [
                                "J. Ford",
                                [
                                    157, 5
                                ]
                            ],
                            [
                                "J. H.",
                                [
                                    11
                                ]
                            ],
                            [
                                "J. Hodges",
                                [
                                    5
                                ]
                            ],
                            [
                                "J. Johnson",
                                [
                                    1, 154, 150, 12, 140
                                ]
                            ],
                            [
                                "J. Knapton",
                                [
                                    5
                                ]
                            ],
                            [
                                "J. Lackington",
                                [
                                    1, 154, 150, 12, 140
                                ]
                            ],
                            [
                                "J. Mawman",
                                [
                                    124
                                ]
                            ],
                            [
                                "J. Murray",
                                [
                                    124, 140
                                ]
                            ],
                            [
                                "J. N.",
                                [
                                    15
                                ]
                            ],
                            [
                                "J. Nichols",
                                [
                                    1, 163, 8, 55, 154, 150, 5, 137, 16, 61, 12, 4, 14, 15, 124, 140, 132
                                ]
                            ],
                            [
                                "J. Okes",
                                [
                                    52, 57, 16, 4
                                ]
                            ],
                            [
                                "J. Rivington and Sons",
                                [
                                    1, 154, 150, 12, 140
                                ]
                            ],
                            [
                                "J. Robson",
                                [
                                    1, 154, 150, 12, 140
                                ]
                            ],
                            [
                                "J. Sewell",
                                [
                                    140
                                ]
                            ],
                            [
                                "J. T.",
                                [
                                    14
                                ]
                            ],
                            [
                                "J. Tonson",
                                [
                                    5
                                ]
                            ],
                            [
                                "J. W. ",
                                [
                                    14, 15
                                ]
                            ],
                            [
                                "J. Walthoe",
                                [
                                    5
                                ]
                            ],
                            [
                                "J. Ward",
                                [
                                    5
                                ]
                            ],
                            [
                                "J.B. Nichols",
                                [
                                    25, 160
                                ]
                            ],
                            [
                                "Ja: Cottrel",
                                [
                                    15
                                ]
                            ],
                            [
                                "James Boler",
                                [
                                    16
                                ]
                            ],
                            [
                                "James Evan Adlard",
                                [
                                    1, 61, 2
                                ]
                            ],
                            [
                                "Jeffrey Chorlton",
                                [
                                    5
                                ]
                            ],
                            [
                                "John Benson",
                                [
                                    137, 12
                                ]
                            ],
                            [
                                "John Budge",
                                [
                                    55
                                ]
                            ],
                            [
                                "John Busbie",
                                [
                                    1, 2
                                ]
                            ],
                            [
                                "John Grove",
                                [
                                    12, 15
                                ]
                            ],
                            [
                                "John Harrison",
                                [
                                    16
                                ]
                            ],
                            [
                                "John Hodgets",
                                [
                                    163
                                ]
                            ],
                            [
                                "John Marriot",
                                [
                                    15
                                ]
                            ],
                            [
                                "John Murray",
                                [
                                    1, 148, 52, 139, 111, 163, 155, 122, 55, 154, 150, 103, 25, 160, 5, 137, 16, 26, 84, 62, 61, 12, 11, 4, 14, 15, 2, 124, 140, 9, 138, 153, 32, 35, 3, 144
                                ]
                            ],
                            [
                                "John Norton",
                                [
                                    5, 137, 15, 140
                                ]
                            ],
                            [
                                "John Okes",
                                [
                                    15
                                ]
                            ],
                            [
                                "John Raworth",
                                [
                                    16
                                ]
                            ],
                            [
                                "John Russell Smith",
                                [
                                    55, 5
                                ]
                            ],
                            [
                                "John Spencer",
                                [
                                    15
                                ]
                            ],
                            [
                                "John Trundle",
                                [
                                    14
                                ]
                            ],
                            [
                                "John Waterson",
                                [
                                    1, 5, 137, 15, 140
                                ]
                            ],
                            [
                                "John Wright",
                                [
                                    14, 9
                                ]
                            ],
                            [
                                "Johne Crooke",
                                [
                                    137
                                ]
                            ],
                            [
                                "Josias Harrison",
                                [
                                    144
                                ]
                            ],
                            [
                                "Kegan Paul, Trench, Tr\u00fcbner & Co., Ltd",
                                [
                                    25, 160
                                ]
                            ],
                            [
                                "L. Davis",
                                [
                                    1, 154, 150, 5, 137, 16, 12, 15, 140
                                ]
                            ],
                            [
                                "L. L.",
                                [
                                    111, 163, 55, 156, 5, 137, 57, 16, 11, 4, 14, 15
                                ]
                            ],
                            [
                                "Lackington and Co.",
                                [
                                    124
                                ]
                            ],
                            [
                                "Lawrence Chapman",
                                [
                                    124
                                ]
                            ],
                            [
                                "Longman and Co.",
                                [
                                    124
                                ]
                            ],
                            [
                                "Longmans, Green & Co.",
                                [
                                    5
                                ]
                            ],
                            [
                                "Longmans, Green and Co.",
                                [
                                    8, 5, 137, 2
                                ]
                            ],
                            [
                                "M. and T. Longman",
                                [
                                    5
                                ]
                            ],
                            [
                                "M. P.",
                                [
                                    5
                                ]
                            ],
                            [
                                "M. Wotton",
                                [
                                    111, 55, 5, 137, 16
                                ]
                            ],
                            [
                                "Manchester University Press",
                                [
                                    1, 7, 111, 5, 26, 84, 61, 4, 14, 2, 9, 132, 3
                                ]
                            ],
                            [
                                "Math. Walbancke",
                                [
                                    16, 11, 4
                                ]
                            ],
                            [
                                "Mathew Lawe",
                                [
                                    3
                                ]
                            ],
                            [
                                "Mathew Rhodes",
                                [
                                    124
                                ]
                            ],
                            [
                                "Matthew Lownes",
                                [
                                    163
                                ]
                            ],
                            [
                                "Michael Sparke",
                                [
                                    154
                                ]
                            ],
                            [
                                "Middlesex County Records Society",
                                [
                                    124
                                ]
                            ],
                            [
                                "N. O.",
                                [
                                    14
                                ]
                            ],
                            [
                                "N. Okes",
                                [
                                    15
                                ]
                            ],
                            [
                                "Nathaniel Butter",
                                [
                                    11, 4
                                ]
                            ],
                            [
                                "Nicholas Okes",
                                [
                                    1, 5, 14, 15
                                ]
                            ],
                            [
                                "Nicholas Okes for John Waterson",
                                [
                                    1, 5
                                ]
                            ],
                            [
                                "Nicholas Vavasour",
                                [
                                    5, 15
                                ]
                            ],
                            [
                                "np",
                                [
                                    5
                                ]
                            ],
                            [
                                "Ogilvie and Speare",
                                [
                                    1, 154, 150, 12, 140
                                ]
                            ],
                            [
                                "Oxford University Press",
                                [
                                    1, 148, 52, 111, 8, 122, 55, 127, 103, 145, 5, 137, 57, 16, 84, 12, 11, 4, 14, 15, 48, 2, 140, 9, 3
                                ]
                            ],
                            [
                                "P. Davey and B. Law",
                                [
                                    5
                                ]
                            ],
                            [
                                "P. S.",
                                [
                                    61
                                ]
                            ],
                            [
                                "Pavel and Son",
                                [
                                    159
                                ]
                            ],
                            [
                                "Peter Short",
                                [
                                    61
                                ]
                            ],
                            [
                                "Philip Chetwind",
                                [
                                    111, 5
                                ]
                            ],
                            [
                                "Pickering & Chatto",
                                [
                                    137
                                ]
                            ],
                            [
                                "Princeton University Press",
                                [
                                    55, 5, 137, 16, 12, 14, 15, 124, 3
                                ]
                            ],
                            [
                                "R. B.",
                                [
                                    1, 111, 5, 4, 14, 3
                                ]
                            ],
                            [
                                "R. Baldwin",
                                [
                                    124, 140
                                ]
                            ],
                            [
                                "R. Chiswell",
                                [
                                    111, 55, 5, 137, 16
                                ]
                            ],
                            [
                                "R. Dodsley ",
                                [
                                    5, 15, 161
                                ]
                            ],
                            [
                                "R. Faulder",
                                [
                                    1, 154, 150, 12, 140
                                ]
                            ],
                            [
                                "R. H. Evans",
                                [
                                    124
                                ]
                            ],
                            [
                                "R. Marriott",
                                [
                                    157, 5
                                ]
                            ],
                            [
                                "R. Pollard",
                                [
                                    4
                                ]
                            ],
                            [
                                "R. Read for William Jones",
                                [
                                    111
                                ]
                            ],
                            [
                                "R. W.",
                                [
                                    157, 5
                                ]
                            ],
                            [
                                "Reeves and Turner",
                                [
                                    8, 55, 156, 5, 137
                                ]
                            ],
                            [
                                "Rich. Meighen",
                                [
                                    111
                                ]
                            ],
                            [
                                "Richard Best",
                                [
                                    140
                                ]
                            ],
                            [
                                "Richard Bradocke",
                                [
                                    61
                                ]
                            ],
                            [
                                "Richard Collins",
                                [
                                    15
                                ]
                            ],
                            [
                                "Richard Jhones",
                                [
                                    1
                                ]
                            ],
                            [
                                "Richard Marriot",
                                [
                                    52, 137, 57
                                ]
                            ],
                            [
                                "Richard Meighen",
                                [
                                    5, 137, 14
                                ]
                            ],
                            [
                                "Richard Olive",
                                [
                                    163, 84
                                ]
                            ],
                            [
                                "Richard Oulton",
                                [
                                    15
                                ]
                            ],
                            [
                                "Richard Royston",
                                [
                                    15
                                ]
                            ],
                            [
                                "Richard Sergier",
                                [
                                    137
                                ]
                            ],
                            [
                                "Richard Thrale",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "Richardi Meighen",
                                [
                                    14, 2
                                ]
                            ],
                            [
                                "Robert Allot",
                                [
                                    163, 5, 16, 15
                                ]
                            ],
                            [
                                "Robson and Clark",
                                [
                                    159
                                ]
                            ],
                            [
                                "Routledge & Kegan Paul",
                                [
                                    3
                                ]
                            ],
                            [
                                "Routledge, Taylor & Francis Group",
                                [
                                    163
                                ]
                            ],
                            [
                                "Russell & Russell",
                                [
                                    163, 55
                                ]
                            ],
                            [
                                "S. Hayes",
                                [
                                    1, 154, 150, 12, 140
                                ]
                            ],
                            [
                                "S. S.",
                                [
                                    1
                                ]
                            ],
                            [
                                "s.n.",
                                [
                                    5
                                ]
                            ],
                            [
                                "Samuel Speed",
                                [
                                    15
                                ]
                            ],
                            [
                                "Scatcherd and Whitaker",
                                [
                                    1, 154, 150, 12, 140
                                ]
                            ],
                            [
                                "Shakespeare Head Press",
                                [
                                    5
                                ]
                            ],
                            [
                                "Shakespeare Society",
                                [
                                    1, 111, 5, 137, 16, 26, 62, 11, 4, 14, 9
                                ]
                            ],
                            [
                                "Simon Stafford",
                                [
                                    132
                                ]
                            ],
                            [
                                "Simon Stafford for Nathaniel Butter",
                                [
                                    117
                                ]
                            ],
                            [
                                "T. and J. Egerton",
                                [
                                    1, 154, 150, 12, 140
                                ]
                            ],
                            [
                                "T. Bassett",
                                [
                                    111, 55, 5, 137, 16
                                ]
                            ],
                            [
                                "T. C.",
                                [
                                    55, 5, 4
                                ]
                            ],
                            [
                                "T. Cadell",
                                [
                                    140
                                ]
                            ],
                            [
                                "T. Collins",
                                [
                                    157, 5
                                ]
                            ],
                            [
                                "T. Davies",
                                [
                                    5, 137, 16, 15
                                ]
                            ],
                            [
                                "T. Evans",
                                [
                                    5, 137, 16, 14, 15
                                ]
                            ],
                            [
                                "T. F.",
                                [
                                    5
                                ]
                            ],
                            [
                                "T. Fawcet",
                                [
                                    15
                                ]
                            ],
                            [
                                "T. Longman",
                                [
                                    1, 154, 150, 12, 140
                                ]
                            ],
                            [
                                "T. N.",
                                [
                                    5
                                ]
                            ],
                            [
                                "T. Payne and Son",
                                [
                                    5, 137, 16, 15
                                ]
                            ],
                            [
                                "T. Payne, jun.",
                                [
                                    1, 154, 150, 12, 140
                                ]
                            ],
                            [
                                "T. Roycroft",
                                [
                                    157, 5
                                ]
                            ],
                            [
                                "T. Sherlock",
                                [
                                    5, 14
                                ]
                            ],
                            [
                                "T. Vernor",
                                [
                                    1, 154, 150, 12, 140
                                ]
                            ],
                            [
                                "T. Waller",
                                [
                                    5, 161
                                ]
                            ],
                            [
                                "T. Wotton",
                                [
                                    5
                                ]
                            ],
                            [
                                "the Author",
                                [
                                    159
                                ]
                            ],
                            [
                                "Tho. Cotes",
                                [
                                    137, 12
                                ]
                            ],
                            [
                                "Tho. Dring",
                                [
                                    52, 137, 57, 4
                                ]
                            ],
                            [
                                "Tho. Man the yonger",
                                [
                                    55, 4
                                ]
                            ],
                            [
                                "Thomas Adams",
                                [
                                    163
                                ]
                            ],
                            [
                                "Thomas Alchorne",
                                [
                                    137
                                ]
                            ],
                            [
                                "Thomas Archer",
                                [
                                    4, 14, 153
                                ]
                            ],
                            [
                                "Thomas Cadman",
                                [
                                    8
                                ]
                            ],
                            [
                                "Thomas Cotes",
                                [
                                    5, 137
                                ]
                            ],
                            [
                                "Thomas Creede",
                                [
                                    163, 84, 2, 144
                                ]
                            ],
                            [
                                "Thomas Egerton",
                                [
                                    1, 52, 139, 111, 8, 30, 103, 25, 160, 5, 137, 57, 16, 26, 62, 12, 11, 4, 14, 15, 48, 2, 124, 138, 118, 153, 32, 35, 3
                                ]
                            ],
                            [
                                "Thomas Gubbins",
                                [
                                    1, 2
                                ]
                            ],
                            [
                                "Thomas Harper",
                                [
                                    5, 137, 16, 15, 140
                                ]
                            ],
                            [
                                "Thomas Hodgkin",
                                [
                                    111, 55, 5, 137, 16
                                ]
                            ],
                            [
                                "Thomas Jones",
                                [
                                    5, 124
                                ]
                            ],
                            [
                                "Thomas Snodham for Thomas Walkley",
                                [
                                    5
                                ]
                            ],
                            [
                                "Thomas Symcocke",
                                [
                                    26
                                ]
                            ],
                            [
                                "Thomas Walkley",
                                [
                                    5
                                ]
                            ],
                            [
                                "Thom\u00e6 Adams",
                                [
                                    2
                                ]
                            ],
                            [
                                "Tonson and Draper",
                                [
                                    5
                                ]
                            ],
                            [
                                "University of Illinois Press",
                                [
                                    8, 130, 55
                                ]
                            ],
                            [
                                "V. S.",
                                [
                                    5
                                ]
                            ],
                            [
                                "Viney",
                                [
                                    2
                                ]
                            ],
                            [
                                "W. Bulmer and Co.",
                                [
                                    124
                                ]
                            ],
                            [
                                "W. Davis",
                                [
                                    5, 137, 16, 15
                                ]
                            ],
                            [
                                "W. Gilbertson",
                                [
                                    137, 12
                                ]
                            ],
                            [
                                "W. Innys and J. Richardson",
                                [
                                    5
                                ]
                            ],
                            [
                                "W. J.",
                                [
                                    154
                                ]
                            ],
                            [
                                "W. Johnston",
                                [
                                    5
                                ]
                            ],
                            [
                                "W. Lowndes",
                                [
                                    1, 154, 150, 12, 140
                                ]
                            ],
                            [
                                "W. R. Chetwood",
                                [
                                    163, 14, 9
                                ]
                            ],
                            [
                                "W. Stansby",
                                [
                                    111
                                ]
                            ],
                            [
                                "Walter Burre",
                                [
                                    163, 14
                                ]
                            ],
                            [
                                "Watson",
                                [
                                    2
                                ]
                            ],
                            [
                                "White and Cochran",
                                [
                                    124
                                ]
                            ],
                            [
                                "William Aspley",
                                [
                                    163, 55, 5
                                ]
                            ],
                            [
                                "William Barley",
                                [
                                    2
                                ]
                            ],
                            [
                                "William Bowyer",
                                [
                                    137
                                ]
                            ],
                            [
                                "William Cooke",
                                [
                                    15
                                ]
                            ],
                            [
                                "William Ferbrand",
                                [
                                    1
                                ]
                            ],
                            [
                                "William Haws",
                                [
                                    2
                                ]
                            ],
                            [
                                "William Holmes",
                                [
                                    55
                                ]
                            ],
                            [
                                "William Jones",
                                [
                                    1, 61
                                ]
                            ],
                            [
                                "William Sheares",
                                [
                                    156
                                ]
                            ],
                            [
                                "William Stansby",
                                [
                                    111, 55, 5
                                ]
                            ],
                            [
                                "[Bernard Alsop]",
                                [
                                    16
                                ]
                            ],
                            [
                                "[Edward Allde?]",
                                [
                                    11
                                ]
                            ],
                            [
                                "[Edward Allde]",
                                [
                                    111, 14
                                ]
                            ],
                            [
                                "[Elizabeth Allde]",
                                [
                                    16
                                ]
                            ],
                            [
                                "[James Roberts]",
                                [
                                    1, 14
                                ]
                            ],
                            [
                                "[John Charlewood]",
                                [
                                    2
                                ]
                            ],
                            [
                                "[Nathaniel Butter]",
                                [
                                    14
                                ]
                            ],
                            [
                                "[Thomas Fawcet]",
                                [
                                    16
                                ]
                            ],
                            [
                                "[Thomas Orwin]",
                                [
                                    2
                                ]
                            ],
                            [
                                "[William Stansby]",
                                [
                                    14
                                ]
                            ]
                        ]
                    }
                ],
                [
                    "Place of Publication",
                    {
                        "t": "s",
                        "q": [
                            "SELECT DISTINCT pn.name, tr.id, tr.name",
                            "FROM ltbapp_record AS rec, ltbapp_record_helper_documents AS isrd, ltbapp_troupe AS tr, ltbapp_ass_event_troupes AS iset, ltbapp_placename AS pn, ltbapp_docpublisher AS isdp",
                            "WHERE rec.id = isrd.record_id AND isdp.document_id = isrd.document_id AND pn.id = isdp.placeof_pub_id AND tr.id = iset.troupe_id AND rec.event_id = iset.event_id",
                            "ORDER BY pn.name, tr.name"
                        ],
                        "h": "Contains an alphabetical list of the places of publication of primary and secondary sources.",
                        "i": [
                            [
                                "Aylesbury",
                                [
                                    2
                                ]
                            ],
                            [
                                "Cambridge",
                                [
                                    1, 148, 52, 139, 7, 111, 163, 8, 122, 130, 55, 156, 158, 127, 30, 154, 5, 137, 57, 16, 26, 141, 84, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 118, 132, 32, 3, 144
                                ]
                            ],
                            [
                                "Cambridge, MT",
                                [
                                    61, 3
                                ]
                            ],
                            [
                                "Dover, NH",
                                [
                                    1, 7, 111, 5, 26, 84, 61, 4, 14, 2, 9, 132, 3
                                ]
                            ],
                            [
                                "Dublin",
                                [
                                    163, 5, 4, 14, 9
                                ]
                            ],
                            [
                                "Ithaca, NY",
                                [
                                    139, 8, 5, 137, 32
                                ]
                            ],
                            [
                                "London",
                                [
                                    1, 157, 148, 52, 139, 111, 163, 155, 8, 122, 55, 156, 117, 30, 154, 150, 103, 25, 160, 5, 137, 57, 16, 26, 84, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 138, 118, 132, 161, 153, 32, 35, 3, 144
                                ]
                            ],
                            [
                                "Louvain",
                                [
                                    35
                                ]
                            ],
                            [
                                "Manchester",
                                [
                                    52, 5, 137, 61
                                ]
                            ],
                            [
                                "New York",
                                [
                                    52, 163, 8, 55, 25, 160, 5, 137, 62, 61, 3
                                ]
                            ],
                            [
                                "Oxford",
                                [
                                    1, 148, 52, 7, 111, 163, 8, 122, 55, 156, 158, 117, 127, 103, 145, 5, 137, 57, 16, 26, 84, 12, 11, 4, 14, 15, 48, 2, 140, 9, 32, 3
                                ]
                            ],
                            [
                                "Philadelphia",
                                [
                                    25, 160, 5, 62, 11, 14
                                ]
                            ],
                            [
                                "Princeton, NJ",
                                [
                                    55, 5, 137, 16, 12, 14, 15, 124, 3
                                ]
                            ],
                            [
                                "Rotterdam",
                                [
                                    16
                                ]
                            ],
                            [
                                "Stratford",
                                [
                                    5
                                ]
                            ],
                            [
                                "Urbana, IL",
                                [
                                    8, 130, 55
                                ]
                            ],
                            [
                                "Washington, DC",
                                [
                                    1, 139, 111, 117, 84, 14, 3
                                ]
                            ],
                            [
                                "[London]",
                                [
                                    2
                                ]
                            ]
                        ]
                    }
                ],
                [
                    "Repositories",
                    {
                        "t": "s",
                        "q": [
                            "SELECT DISTINCT rep.name, tr.id, tr.name",
                            "FROM ltbapp_ass_event_troupes AS iset, ltbapp_record AS rec, ltbapp_record_helper_documents AS isrd, ltbapp_repository AS rep, ltbapp_docrepository AS isdr, ltbapp_troupe AS tr",
                            "WHERE rep.id = isdr.repository_id AND rec.id = isrd.record_id AND isdr.document_id = isrd.document_id AND tr.id = iset.troupe_id AND rec.event_id = iset.event_id",
                            "ORDER BY rep.name, tr.name"
                        ],
                        "h": "Contains an alphabetical list of repositories in which primary sources and secondary sources consulted by EMLoT's editorial team are held.",
                        "i": [
                            [
                                "Alnwick Castle",
                                [
                                    163
                                ]
                            ],
                            [
                                "Archivio di Stato a Venezia",
                                [
                                    5
                                ]
                            ],
                            [
                                "Beinecke Library, Yale University, New Haven NJ, USA",
                                [
                                    52, 5, 137, 16, 62, 12, 11, 15, 48, 124, 140, 138, 153, 152
                                ]
                            ],
                            [
                                "Bodleian Library, Oxford University, Oxford OXF, UK",
                                [
                                    5, 137, 61, 12, 14, 2, 124
                                ]
                            ],
                            [
                                "British Library, London, UK",
                                [
                                    1, 157, 148, 52, 159, 139, 111, 163, 155, 8, 55, 156, 30, 154, 150, 103, 25, 160, 5, 137, 57, 16, 26, 84, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 138, 118, 132, 161, 153, 32, 35, 3
                                ]
                            ],
                            [
                                "Cambridge Collections Online",
                                [
                                    8, 5
                                ]
                            ],
                            [
                                "Cambridge Core",
                                [
                                    137
                                ]
                            ],
                            [
                                "Cambridge University Library, Cambridge CAM, UK",
                                [
                                    5, 124
                                ]
                            ],
                            [
                                "Centre for Renaissance and Reformation Studies, Victoria University, University of Toronto, Toronto ON, CA",
                                [
                                    52, 111, 8, 25, 160, 5, 137, 57, 16, 26, 12, 11, 4, 14, 15, 2, 124, 3
                                ]
                            ],
                            [
                                "Cornell University Library, Ithaca NY, USA",
                                [
                                    2
                                ]
                            ],
                            [
                                "Dulwich College, London, UK",
                                [
                                    1, 7, 111, 55, 5, 16, 62, 61, 11, 4, 14, 2, 9, 132, 3
                                ]
                            ],
                            [
                                "Dyce Collection, Victoria and Albert Museum, London, UK",
                                [
                                    55, 5
                                ]
                            ],
                            [
                                "Early English Books Online",
                                [
                                    163, 5, 137
                                ]
                            ],
                            [
                                "Eighteenth Century Collections Online",
                                [
                                    140
                                ]
                            ],
                            [
                                "Eton College Library, Eton College, Windsor, BRK, UK",
                                [
                                    3
                                ]
                            ],
                            [
                                "Folger Shakespeare Library, Washington DC, USA",
                                [
                                    1, 111, 117, 5, 137, 62, 12, 11, 4, 14, 15, 140, 9
                                ]
                            ],
                            [
                                "Google Books",
                                [
                                    62
                                ]
                            ],
                            [
                                "Graham Library, Trinity College, University of Toronto, Toronto ON, CA",
                                [
                                    35
                                ]
                            ],
                            [
                                "Harvard University Library, Cambridge MA, USA",
                                [
                                    1, 5, 16, 62, 11, 14
                                ]
                            ],
                            [
                                "Hatfield House, Hatfield, Hertfordshire, UK",
                                [
                                    61
                                ]
                            ],
                            [
                                "HathiTrust",
                                [
                                    163, 122, 55
                                ]
                            ],
                            [
                                "Huntington Library and Art Gallery, San Marino CA, USA",
                                [
                                    1, 157, 52, 111, 163, 8, 55, 154, 5, 137, 57, 16, 84, 61, 12, 11, 4, 14, 15, 2, 140, 132, 153, 3, 144
                                ]
                            ],
                            [
                                "Internet Archive",
                                [
                                    163, 122, 55, 25, 160, 5, 137
                                ]
                            ],
                            [
                                "JSTOR",
                                [
                                    111, 130, 158, 137, 57, 12, 32
                                ]
                            ],
                            [
                                "Kent Archives Office, Maidstone",
                                [
                                    163
                                ]
                            ],
                            [
                                "Library of Congress, Washington DC, USA",
                                [
                                    111, 163, 55, 156, 5, 137, 57, 16, 11, 4, 14, 15
                                ]
                            ],
                            [
                                "London Metropolitan Archives, London, UK",
                                [
                                    1, 111, 163, 5, 137, 84, 124, 3
                                ]
                            ],
                            [
                                "National Art Library, Victoria and Albert Museum, London",
                                [
                                    163
                                ]
                            ],
                            [
                                "Newberry Library, Chicago IL, USA",
                                [
                                    1, 61, 15, 2
                                ]
                            ],
                            [
                                "not extant",
                                [
                                    1, 52, 150, 103, 5, 137, 57, 16, 62, 12, 11, 15, 48, 124, 140, 138, 153, 152
                                ]
                            ],
                            [
                                "Parliamentary Archives",
                                [
                                    137, 15
                                ]
                            ],
                            [
                                "Pratt Library, Victoria University, University of Toronto, Toronto ON, CA",
                                [
                                    1, 148, 52, 139, 111, 163, 155, 8, 122, 55, 154, 150, 103, 25, 160, 5, 137, 16, 26, 84, 62, 61, 12, 11, 4, 14, 15, 2, 124, 140, 9, 138, 153, 32, 35, 3, 144
                                ]
                            ],
                            [
                                "Queen's College, Oxford",
                                [
                                    137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                "Records of Early English Drama Library, University of Toronto, Toronto ON, CA",
                                [
                                    1, 148, 52, 7, 111, 163, 8, 122, 55, 127, 103, 145, 5, 137, 57, 16, 84, 61, 12, 11, 4, 14, 15, 48, 2, 140, 9, 132, 3
                                ]
                            ],
                            [
                                "Robarts Library, University of Toronto, Toronto ON, CA",
                                [
                                    1, 148, 52, 139, 7, 111, 163, 8, 122, 130, 55, 156, 158, 117, 127, 30, 154, 150, 103, 5, 137, 57, 16, 26, 141, 84, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 138, 118, 132, 32, 3, 144
                                ]
                            ],
                            [
                                "Sheffield Archives",
                                [
                                    137
                                ]
                            ],
                            [
                                "Somerset Record Office, Taunton, Somerset, UK",
                                [
                                    5
                                ]
                            ],
                            [
                                "State Papers Online",
                                [
                                    5
                                ]
                            ],
                            [
                                "Stationers' Company Archive",
                                [
                                    163
                                ]
                            ],
                            [
                                "Surrey History Centre",
                                [
                                    8
                                ]
                            ],
                            [
                                "The National Archives, Public Record Office, Kew, UK",
                                [
                                    1, 52, 139, 7, 111, 163, 8, 122, 130, 55, 156, 158, 127, 30, 103, 25, 160, 145, 5, 137, 57, 16, 26, 141, 84, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 118, 32, 35, 3
                                ]
                            ],
                            [
                                "The National Art Library, Victoria and Albert Museum, London, UK",
                                [
                                    137
                                ]
                            ],
                            [
                                "Toronto Reference Library, Toronto Public Library, Toronto ON, CA",
                                [
                                    5
                                ]
                            ],
                            [
                                "Universit\u00e4tsbibliothek Kassel",
                                [
                                    55, 5
                                ]
                            ],
                            [
                                "University of Illinois, Urbana-Champain Campus Library, Chicago IL, USA",
                                [
                                    55, 14, 2
                                ]
                            ],
                            [
                                "University of Michigan Libraries",
                                [
                                    5
                                ]
                            ],
                            [
                                "University of Nottingham Manuscripts and Special Collections",
                                [
                                    5
                                ]
                            ],
                            [
                                "UTL at Downsview, University of Toronto, Downsview ON, CA",
                                [
                                    5, 4
                                ]
                            ],
                            [
                                "Westminster Diocesan Archives",
                                [
                                    5
                                ]
                            ],
                            [
                                "Yale University Library, New Haven NJ, USA",
                                [
                                    137, 12, 15
                                ]
                            ]
                        ]
                    }
                ]
            ]
        ],
        [
            "Document: Description",
            "This category contains facets classifying EMLoT's primary (pre-1642) sources.",
            [
                [
                    "Document Type",
                    {
                        "t": "s",
                        "q": [
                            "SELECT DISTINCT dt.name, tr.id, tr.name",
                            "FROM ltbapp_record AS rec, ltbapp_record_helper_documents AS isrd, ltbapp_ass_event_troupes AS iset, ltbapp_troupe AS tr, ltbapp_document_doc_type AS isddt, ltbapp_documenttype AS dt",
                            "WHERE isddt.document_id = isrd.document_id AND dt.id = isddt.documenttype_id AND rec.id = isrd.record_id AND tr.id = iset.troupe_id AND rec.event_id = iset.event_id",
                            "ORDER BY dt.name, tr.name"
                        ],
                        "h": "Contains list of types of primary and secondary sources, for example: Accounts, Monographs, Plays.",
                        "i": [
                            [
                                "abstract",
                                [
                                    55, 5, 11, 14
                                ]
                            ],
                            [
                                "accounts",
                                [
                                    1, 7, 111, 158, 5, 137, 26, 141, 61, 11, 4, 14, 2, 9, 132, 32, 3
                                ]
                            ],
                            [
                                "affidavit book",
                                [
                                    137, 62
                                ]
                            ],
                            [
                                "almanac",
                                [
                                    153
                                ]
                            ],
                            [
                                "annotations",
                                [
                                    12
                                ]
                            ],
                            [
                                "answer",
                                [
                                    52, 55, 57, 61, 12, 14, 15, 124
                                ]
                            ],
                            [
                                "answers",
                                [
                                    163, 5, 11, 14, 124, 32, 3
                                ]
                            ],
                            [
                                "anthology",
                                [
                                    163, 8, 55, 5, 137, 61, 4, 14, 15, 124, 9, 132
                                ]
                            ],
                            [
                                "appearance book",
                                [
                                    5, 14
                                ]
                            ],
                            [
                                "article",
                                [
                                    52, 111, 163, 8, 130, 55, 158, 5, 137, 57, 16, 141, 61, 12, 11, 4, 14, 15, 2, 124, 32, 3
                                ]
                            ],
                            [
                                "ballad",
                                [
                                    11, 14
                                ]
                            ],
                            [
                                "bill",
                                [
                                    52, 163, 55, 156, 5, 137, 57, 61, 12, 11, 14, 15, 124, 32, 3
                                ]
                            ],
                            [
                                "bill, answers, demurrer",
                                [
                                    5
                                ]
                            ],
                            [
                                "biography",
                                [
                                    111, 163, 55, 156, 5, 137, 57, 16, 11, 4, 14, 15
                                ]
                            ],
                            [
                                "bond",
                                [
                                    124
                                ]
                            ],
                            [
                                "catalogue",
                                [
                                    137
                                ]
                            ],
                            [
                                "chronicle",
                                [
                                    25, 14, 2
                                ]
                            ],
                            [
                                "collected works",
                                [
                                    52, 111, 55, 5, 137, 16, 11, 14, 15, 2, 124, 140
                                ]
                            ],
                            [
                                "commission to examiners",
                                [
                                    137
                                ]
                            ],
                            [
                                "commonplace book",
                                [
                                    5
                                ]
                            ],
                            [
                                "complaint",
                                [
                                    25, 12
                                ]
                            ],
                            [
                                "coram rege roll",
                                [
                                    8, 130, 55, 5
                                ]
                            ],
                            [
                                "correspondence",
                                [
                                    157, 25, 160, 5, 62, 11, 14
                                ]
                            ],
                            [
                                "declared accounts",
                                [
                                    32
                                ]
                            ],
                            [
                                "decree",
                                [
                                    3
                                ]
                            ],
                            [
                                "deposition",
                                [
                                    137, 14, 3
                                ]
                            ],
                            [
                                "depositions",
                                [
                                    163, 11, 14, 124, 3
                                ]
                            ],
                            [
                                "diary",
                                [
                                    1, 7, 111, 122, 55, 5, 137, 57, 61, 12, 4, 15, 2, 140, 9, 132, 3
                                ]
                            ],
                            [
                                "docket",
                                [
                                    5
                                ]
                            ],
                            [
                                "draft patent",
                                [
                                    15
                                ]
                            ],
                            [
                                "epigram",
                                [
                                    1
                                ]
                            ],
                            [
                                "epitaph",
                                [
                                    14
                                ]
                            ],
                            [
                                "essay",
                                [
                                    1, 52, 154, 150, 103, 5, 137, 57, 16, 62, 12, 11, 15, 2, 124, 140, 138
                                ]
                            ],
                            [
                                "establishment list",
                                [
                                    52, 127, 137, 12, 15, 48
                                ]
                            ],
                            [
                                "interrogatories",
                                [
                                    163, 137, 3
                                ]
                            ],
                            [
                                "interrogatory",
                                [
                                    111
                                ]
                            ],
                            [
                                "itinerary",
                                [
                                    55, 5
                                ]
                            ],
                            [
                                "lease",
                                [
                                    1, 62
                                ]
                            ],
                            [
                                "letter",
                                [
                                    1, 148, 139, 163, 8, 122, 30, 154, 25, 160, 5, 137, 26, 84, 62, 61, 11, 14, 2, 118, 32
                                ]
                            ],
                            [
                                "letters",
                                [
                                    157, 5, 14
                                ]
                            ],
                            [
                                "library catalogue",
                                [
                                    14, 15
                                ]
                            ],
                            [
                                "list",
                                [
                                    25, 137
                                ]
                            ],
                            [
                                "manuscript collection",
                                [
                                    55, 5, 11, 14
                                ]
                            ],
                            [
                                "masque",
                                [
                                    5
                                ]
                            ],
                            [
                                "memorandum book",
                                [
                                    137
                                ]
                            ],
                            [
                                "miscellaneous",
                                [
                                    1, 55, 5, 16, 62, 11, 4, 14, 9
                                ]
                            ],
                            [
                                "miscellany",
                                [
                                    157, 52, 5, 137, 16, 62, 12, 11, 15, 48, 124, 140, 138, 153, 152
                                ]
                            ],
                            [
                                "monograph",
                                [
                                    1, 148, 52, 159, 139, 7, 111, 163, 155, 8, 122, 130, 55, 156, 117, 30, 154, 150, 103, 25, 160, 5, 137, 57, 16, 26, 84, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 138, 118, 132, 161, 153, 32, 35, 3, 144
                                ]
                            ],
                            [
                                "newsletter",
                                [
                                    5
                                ]
                            ],
                            [
                                "note",
                                [
                                    137
                                ]
                            ],
                            [
                                "notebooks",
                                [
                                    137
                                ]
                            ],
                            [
                                "office book",
                                [
                                    52, 150, 103, 5, 137, 57, 16, 62, 12, 11, 15, 48, 124, 140, 138, 153, 152
                                ]
                            ],
                            [
                                "order",
                                [
                                    52, 5, 137, 62, 61, 12, 15
                                ]
                            ],
                            [
                                "orders",
                                [
                                    1, 111, 137, 84, 14, 3
                                ]
                            ],
                            [
                                "pageant",
                                [
                                    1, 111, 55, 5, 4, 14, 3
                                ]
                            ],
                            [
                                "pamphlet",
                                [
                                    1, 163, 5, 16, 11, 2
                                ]
                            ],
                            [
                                "papers",
                                [
                                    111
                                ]
                            ],
                            [
                                "patent",
                                [
                                    5, 137, 4, 14, 3
                                ]
                            ],
                            [
                                "patent roll",
                                [
                                    122, 55, 16, 11
                                ]
                            ],
                            [
                                "personal papers",
                                [
                                    159
                                ]
                            ],
                            [
                                "petition",
                                [
                                    52, 137, 15
                                ]
                            ],
                            [
                                "petition book",
                                [
                                    145, 137, 57, 12
                                ]
                            ],
                            [
                                "play",
                                [
                                    1, 52, 111, 163, 155, 8, 55, 156, 117, 5, 137, 57, 16, 84, 61, 12, 11, 4, 14, 15, 2, 124, 9, 132, 3, 144
                                ]
                            ],
                            [
                                "play collection",
                                [
                                    163
                                ]
                            ],
                            [
                                "pleadings",
                                [
                                    130, 55, 156, 158, 5, 137
                                ]
                            ],
                            [
                                "poem",
                                [
                                    5, 137, 16, 12, 15, 140
                                ]
                            ],
                            [
                                "preface",
                                [
                                    111, 5, 16, 2
                                ]
                            ],
                            [
                                "proceedings",
                                [
                                    8, 5
                                ]
                            ],
                            [
                                "process books",
                                [
                                    137
                                ]
                            ],
                            [
                                "prologue",
                                [
                                    140
                                ]
                            ],
                            [
                                "promptbook",
                                [
                                    16, 124
                                ]
                            ],
                            [
                                "record of charges",
                                [
                                    12
                                ]
                            ],
                            [
                                "records collection",
                                [
                                    1, 148, 52, 139, 7, 111, 163, 8, 122, 130, 55, 156, 158, 117, 127, 30, 154, 103, 25, 160, 145, 5, 137, 57, 16, 26, 141, 84, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 138, 118, 132, 153, 32, 35, 3, 152, 144
                                ]
                            ],
                            [
                                "register",
                                [
                                    1, 111, 163, 55, 5, 11, 14
                                ]
                            ],
                            [
                                "registers",
                                [
                                    61, 9
                                ]
                            ],
                            [
                                "rejoinder",
                                [
                                    55, 5, 137
                                ]
                            ],
                            [
                                "remembrancia",
                                [
                                    1, 111, 84, 3
                                ]
                            ],
                            [
                                "replication",
                                [
                                    55, 156, 5, 61, 3
                                ]
                            ],
                            [
                                "report",
                                [
                                    137
                                ]
                            ],
                            [
                                "scrapbook",
                                [
                                    52, 5, 137, 16, 62, 12, 11, 14, 15, 48, 124, 140, 138, 153, 152
                                ]
                            ],
                            [
                                "sermon",
                                [
                                    163
                                ]
                            ],
                            [
                                "signet bill",
                                [
                                    55, 5, 16, 11
                                ]
                            ],
                            [
                                "song",
                                [
                                    26
                                ]
                            ],
                            [
                                "stage plots",
                                [
                                    1
                                ]
                            ],
                            [
                                "state papers",
                                [
                                    111, 25, 160, 35
                                ]
                            ],
                            [
                                "summary",
                                [
                                    137
                                ]
                            ],
                            [
                                "testimony",
                                [
                                    111
                                ]
                            ],
                            [
                                "transcriptions",
                                [
                                    111
                                ]
                            ],
                            [
                                "travel narrative",
                                [
                                    55, 5
                                ]
                            ],
                            [
                                "treatise",
                                [
                                    163, 154
                                ]
                            ],
                            [
                                "visitation book",
                                [
                                    163
                                ]
                            ],
                            [
                                "visitation report",
                                [
                                    163
                                ]
                            ],
                            [
                                "warrant",
                                [
                                    8, 122, 5
                                ]
                            ],
                            [
                                "warrant book",
                                [
                                    52, 103, 5, 137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                "warrant books",
                                [
                                    8, 5, 137, 2
                                ]
                            ],
                            [
                                "will",
                                [
                                    52, 5, 137, 61
                                ]
                            ],
                            [
                                "works",
                                [
                                    5
                                ]
                            ]
                        ]
                    }
                ],
                [
                    "Document Class",
                    {
                        "t": "s",
                        "q": [
                            "SELECT DISTINCT dn.name, tr.id, tr.name",
                            "FROM ltbapp_ass_event_troupes AS iset, ltbapp_troupe AS tr, ltbapp_document_doc_class AS isddc, ltbapp_record_helper_documents AS isrd, ltbapp_record AS rec, ltbapp_documentnature AS dn",
                            "WHERE dn.id = isddc.documentnature_id AND rec.id = isrd.record_id AND isddc.document_id = isrd.document_id AND tr.id = iset.troupe_id AND rec.event_id = iset.event_id",
                            "ORDER BY dn.name, tr.name"
                        ],
                        "h": "Contains a list describing the genre or social context of primary and secondary sources, for example: Biographical, Civic, Polemical.",
                        "i": [
                            [
                                "anecdotal",
                                [
                                    163, 122, 55, 5
                                ]
                            ],
                            [
                                "bibliographical",
                                [
                                    14, 15
                                ]
                            ],
                            [
                                "biographical",
                                [
                                    1, 111, 55, 5, 137, 16, 26, 62, 11, 4, 14, 124, 9
                                ]
                            ],
                            [
                                "business",
                                [
                                    1, 8, 55, 5, 16, 62, 11, 4, 14, 9
                                ]
                            ],
                            [
                                "City of London",
                                [
                                    1, 111, 84, 3
                                ]
                            ],
                            [
                                "civic",
                                [
                                    1, 111, 5, 137, 84, 4, 14, 124, 9, 3
                                ]
                            ],
                            [
                                "civil",
                                [
                                    1, 52, 139, 111, 163, 8, 122, 130, 55, 156, 158, 30, 5, 137, 57, 16, 26, 84, 62, 61, 12, 11, 4, 14, 15, 124, 9, 118, 32, 3
                                ]
                            ],
                            [
                                "commendatory",
                                [
                                    137, 12
                                ]
                            ],
                            [
                                "contractual",
                                [
                                    1, 55, 5, 16, 62, 11, 4, 14, 15, 9
                                ]
                            ],
                            [
                                "copyright",
                                [
                                    163
                                ]
                            ],
                            [
                                "diocesan",
                                [
                                    163
                                ]
                            ],
                            [
                                "dramatic",
                                [
                                    1, 52, 111, 163, 155, 8, 55, 156, 117, 25, 160, 5, 137, 57, 16, 84, 62, 61, 12, 11, 4, 14, 15, 2, 124, 140, 9, 132, 3, 144
                                ]
                            ],
                            [
                                "ecclesiastical",
                                [
                                    122, 5
                                ]
                            ],
                            [
                                "epistolary",
                                [
                                    1, 122, 55, 25, 160, 5, 137, 16, 26, 84, 62, 61, 11, 4, 14, 2, 9
                                ]
                            ],
                            [
                                "financial",
                                [
                                    1, 7, 111, 55, 5, 137, 16, 62, 61, 11, 4, 14, 2, 9, 132, 3
                                ]
                            ],
                            [
                                "guild",
                                [
                                    1, 55, 5, 16, 62, 11, 4, 14, 9
                                ]
                            ],
                            [
                                "historical",
                                [
                                    1, 148, 52, 159, 139, 7, 111, 163, 155, 8, 122, 130, 55, 156, 158, 117, 30, 154, 150, 103, 25, 160, 5, 137, 57, 16, 26, 141, 84, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 138, 118, 132, 161, 153, 32, 35, 3, 152, 144
                                ]
                            ],
                            [
                                "legal",
                                [
                                    1, 111, 163, 8, 130, 55, 5, 137, 16, 62, 11, 4, 14, 9
                                ]
                            ],
                            [
                                "literary",
                                [
                                    1, 157, 52, 111, 163, 155, 55, 156, 5, 137, 57, 16, 62, 12, 11, 4, 14, 15, 2, 124, 140, 9
                                ]
                            ],
                            [
                                "memorial",
                                [
                                    14
                                ]
                            ],
                            [
                                "miscellaneous",
                                [
                                    1, 148, 52, 139, 7, 111, 163, 8, 122, 130, 55, 156, 158, 117, 127, 30, 154, 5, 137, 57, 16, 26, 141, 84, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 118, 132, 32, 3, 144
                                ]
                            ],
                            [
                                "miscellaneous records",
                                [
                                    8, 5, 137, 2
                                ]
                            ],
                            [
                                "musical",
                                [
                                    159, 163, 26
                                ]
                            ],
                            [
                                "official",
                                [
                                    148, 2
                                ]
                            ],
                            [
                                "parochial",
                                [
                                    1, 163, 55, 5, 137, 16, 62, 11, 4, 14, 9
                                ]
                            ],
                            [
                                "personal",
                                [
                                    1, 157, 52, 159, 7, 111, 163, 55, 25, 160, 5, 137, 57, 16, 62, 61, 12, 11, 4, 14, 15, 2, 140, 9, 132, 3
                                ]
                            ],
                            [
                                "polemical",
                                [
                                    154, 137, 16, 15, 2, 140
                                ]
                            ],
                            [
                                "political",
                                [
                                    1, 5, 137, 26, 84, 2
                                ]
                            ],
                            [
                                "popular",
                                [
                                    16, 14
                                ]
                            ],
                            [
                                "religious",
                                [
                                    163
                                ]
                            ],
                            [
                                "royal",
                                [
                                    1, 52, 7, 111, 8, 122, 55, 158, 127, 30, 150, 103, 145, 5, 137, 57, 16, 26, 141, 62, 12, 11, 4, 14, 15, 48, 2, 124, 140, 138, 118, 153, 32, 35, 3, 152
                                ]
                            ],
                            [
                                "satirical",
                                [
                                    1, 5, 16, 11, 2, 153
                                ]
                            ],
                            [
                                "state",
                                [
                                    111, 5
                                ]
                            ],
                            [
                                "supplicatory",
                                [
                                    52, 5, 137, 15
                                ]
                            ],
                            [
                                "testamentary",
                                [
                                    52, 5, 137, 61
                                ]
                            ],
                            [
                                "theatrical",
                                [
                                    1, 52, 7, 111, 163, 8, 122, 130, 55, 158, 25, 5, 137, 16, 26, 84, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 138, 132, 161, 153, 32, 3, 152
                                ]
                            ],
                            [
                                "topical",
                                [
                                    159, 111, 163, 122, 55, 154, 25, 160, 5, 137, 62, 61, 11, 14, 2
                                ]
                            ],
                            [
                                "topographical",
                                [
                                    55, 5
                                ]
                            ]
                        ]
                    }
                ],
                [
                    "Production Auspices",
                    {
                        "t": "s",
                        "q": [
                            "SELECT DISTINCT aus.name, tr.id, tr.name",
                            "FROM ltbapp_record_helper_documents AS isrd, ltbapp_document_prod_auspices AS ispa, ltbapp_record AS rec, ltbapp_troupe AS tr, ltbapp_ass_event_troupes AS iset, ltbapp_auspicesproduction AS aus",
                            "WHERE rec.id = isrd.record_id AND ispa.document_id = isrd.document_id AND ispa.auspicesproduction_id = aus.id AND tr.id = iset.troupe_id AND rec.event_id = iset.event_id",
                            "ORDER BY aus.name, tr.name"
                        ],
                        "h": "Contains a list of those bodies who produced primary and secondary sources, for example: Office of the Revels, Private individual, Single author.",
                        "i": [
                            [
                                "Auditors of the Imprest and Commissioners of Audit",
                                [
                                    32
                                ]
                            ],
                            [
                                "Chancery and Supreme Court of Judicature",
                                [
                                    122, 55
                                ]
                            ],
                            [
                                "Chief Justice",
                                [
                                    8, 130
                                ]
                            ],
                            [
                                "Corporation of London",
                                [
                                    1, 111, 137, 84, 3
                                ]
                            ],
                            [
                                "Court of Chancery",
                                [
                                    130, 55, 156, 5, 16, 11, 4, 14, 124, 3
                                ]
                            ],
                            [
                                "Court of King's Bench",
                                [
                                    55, 5
                                ]
                            ],
                            [
                                "Court of Requests",
                                [
                                    52, 55, 158, 5, 137, 57, 62, 61, 12, 11, 14, 15, 124, 32, 3
                                ]
                            ],
                            [
                                "Court of Star Chamber",
                                [
                                    163, 8, 5, 11
                                ]
                            ],
                            [
                                "Diocese of London",
                                [
                                    163
                                ]
                            ],
                            [
                                "Florentine ambassador",
                                [
                                    5
                                ]
                            ],
                            [
                                "Gray's Inn",
                                [
                                    25
                                ]
                            ],
                            [
                                "Great Britain. Public Record Office",
                                [
                                    1, 111, 8, 30, 26, 14, 118, 32
                                ]
                            ],
                            [
                                "House of Lords",
                                [
                                    137, 15
                                ]
                            ],
                            [
                                "Justices of the Peace, Middlesex",
                                [
                                    124
                                ]
                            ],
                            [
                                "Lord Chamberlain's Department",
                                [
                                    8, 5, 137, 2
                                ]
                            ],
                            [
                                "Lord Chamberlain's Office",
                                [
                                    52, 127, 103, 145, 5, 137, 57, 12, 11, 4, 14, 15, 48, 140
                                ]
                            ],
                            [
                                "Lord Chancellor",
                                [
                                    8
                                ]
                            ],
                            [
                                "Lord Mayor",
                                [
                                    5
                                ]
                            ],
                            [
                                "Lord Mayor's Office",
                                [
                                    137
                                ]
                            ],
                            [
                                "Malone Society",
                                [
                                    1, 148, 52, 111, 8, 122, 55, 127, 103, 145, 5, 137, 57, 16, 84, 12, 11, 4, 14, 15, 48, 2, 140, 9, 3
                                ]
                            ],
                            [
                                "multiple author",
                                [
                                    1, 7, 111, 163, 8, 55, 5, 137, 61, 4, 14, 15, 2, 124, 9, 132, 3
                                ]
                            ],
                            [
                                "multiple editor",
                                [
                                    1, 148, 52, 139, 7, 111, 163, 8, 122, 130, 55, 156, 158, 127, 30, 154, 103, 145, 5, 137, 57, 16, 26, 141, 84, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 118, 132, 32, 3, 144
                                ]
                            ],
                            [
                                "Office of the Exchequer",
                                [
                                    141, 11
                                ]
                            ],
                            [
                                "Office of the Revels",
                                [
                                    52, 150, 103, 5, 137, 57, 16, 62, 12, 11, 15, 48, 124, 140, 138, 153, 152
                                ]
                            ],
                            [
                                "Patent Office",
                                [
                                    137
                                ]
                            ],
                            [
                                "playhouse",
                                [
                                    1
                                ]
                            ],
                            [
                                "Prerogative Court of Canterbury",
                                [
                                    5
                                ]
                            ],
                            [
                                "private individual",
                                [
                                    1, 157, 52, 159, 7, 111, 163, 8, 122, 55, 154, 25, 160, 5, 137, 57, 16, 26, 84, 62, 61, 12, 11, 4, 14, 15, 2, 140, 132, 3
                                ]
                            ],
                            [
                                "private individuals",
                                [
                                    55, 5
                                ]
                            ],
                            [
                                "Privy Council",
                                [
                                    1, 52, 139, 111, 8, 55, 30, 5, 137, 26, 84, 61, 12, 11, 14, 15, 9, 118, 32
                                ]
                            ],
                            [
                                "Privy Seal Office",
                                [
                                    122, 55, 5, 62
                                ]
                            ],
                            [
                                "Probate Court",
                                [
                                    52, 5, 137, 61
                                ]
                            ],
                            [
                                "Recorder of London",
                                [
                                    148, 2
                                ]
                            ],
                            [
                                "Red Bull",
                                [
                                    16, 124
                                ]
                            ],
                            [
                                "Salisbury Court",
                                [
                                    15
                                ]
                            ],
                            [
                                "Secretary of State's Office",
                                [
                                    5
                                ]
                            ],
                            [
                                "Signet Office",
                                [
                                    55, 5, 16, 11
                                ]
                            ],
                            [
                                "single author",
                                [
                                    1, 157, 148, 52, 159, 139, 7, 111, 163, 155, 8, 122, 130, 55, 156, 158, 117, 30, 154, 150, 103, 25, 160, 5, 137, 57, 16, 26, 141, 84, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 138, 118, 132, 161, 153, 32, 35, 3, 152, 144
                                ]
                            ],
                            [
                                "single editor",
                                [
                                    1, 52, 7, 111, 163, 122, 55, 25, 160, 5, 137, 57, 16, 26, 84, 62, 61, 12, 11, 4, 14, 15, 2, 124, 9, 132, 35, 3
                                ]
                            ],
                            [
                                "Six Clerks Office",
                                [
                                    55
                                ]
                            ],
                            [
                                "Spanish ambassador",
                                [
                                    5
                                ]
                            ],
                            [
                                "St Paul's Cathedral: Dean and Chapter",
                                [
                                    163
                                ]
                            ],
                            [
                                "St Saviour's, Southwark",
                                [
                                    137
                                ]
                            ],
                            [
                                "State Paper Office",
                                [
                                    25, 160, 35
                                ]
                            ],
                            [
                                "Stationers' Company",
                                [
                                    163
                                ]
                            ],
                            [
                                "Treasurer of the Chamber",
                                [
                                    7, 158, 5, 26, 4, 14, 32, 3
                                ]
                            ],
                            [
                                "troupe",
                                [
                                    1, 16, 14, 15, 124, 3
                                ]
                            ],
                            [
                                "unknown",
                                [
                                    5, 137, 26, 61, 11, 14
                                ]
                            ],
                            [
                                "various",
                                [
                                    1, 55, 5, 16, 62, 11, 4, 14, 9
                                ]
                            ],
                            [
                                "Venetian ambassador",
                                [
                                    5
                                ]
                            ]
                        ]
                    }
                ],
                [
                    "Country of Origin",
                    {
                        "t": "s",
                        "q": [
                            "SELECT DISTINCT pn.name, tr.id, tr.name",
                            "FROM ltbapp_record_helper_documents AS isrd, ltbapp_placename AS pn, ltbapp_troupe AS tr, ltbapp_record AS rec, ltbapp_document AS doc, ltbapp_ass_event_troupes AS iset",
                            "WHERE rec.id = isrd.record_id AND doc.id = isrd.document_id AND pn.id = doc.country_origin_id AND tr.id = iset.troupe_id AND rec.event_id = iset.event_id",
                            "ORDER BY pn.name, tr.name"
                        ],
                        "h": "Contains a list of countries in which primary and secondary sources were produced.",
                        "i": [
                            [
                                "Canada",
                                [
                                    11
                                ]
                            ],
                            [
                                "England",
                                [
                                    1, 157, 148, 52, 159, 139, 7, 111, 163, 155, 8, 122, 130, 55, 156, 158, 117, 127, 30, 154, 150, 103, 25, 160, 145, 5, 137, 57, 16, 26, 141, 84, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 138, 118, 132, 161, 153, 32, 35, 3, 152, 144
                                ]
                            ],
                            [
                                "Germany",
                                [
                                    55, 5
                                ]
                            ],
                            [
                                "USA",
                                [
                                    1, 52, 139, 111, 163, 8, 55, 117, 5, 137, 16, 84, 62, 61, 12, 11, 14, 15, 124, 32, 3
                                ]
                            ]
                        ]
                    }
                ],
                [
                    "Forgeries",
                    {
                        "t": "s",
                        "q": [
                            "SELECT DISTINCT CASE WHEN doc.forgery = 0 THEN 'No' WHEN doc.forgery = 1 THEN 'Yes' END AS Forgery, tr.id, tr.name",
                            "FROM ltbapp_document AS doc, ltbapp_troupe AS tr, ltbapp_record_helper_documents AS isrd, ltbapp_ass_event_troupes AS iset, ltbapp_record AS rec",
                            "WHERE rec.id = isrd.record_id AND doc.id = isrd.document_id AND tr.id = iset.troupe_id AND rec.event_id = iset.event_id",
                            "ORDER BY Forgery, tr.name"
                        ],
                        "h": "Allows filtering of primary sources based on whether they are or are not forgeries.",
                        "i": [
                            [
                                "No",
                                [
                                    1, 157, 148, 52, 159, 139, 7, 111, 163, 155, 8, 122, 130, 55, 156, 158, 117, 127, 30, 154, 150, 103, 25, 160, 145, 5, 137, 57, 16, 26, 141, 84, 62, 61, 12, 11, 4, 14, 15, 48, 2, 124, 140, 9, 138, 118, 132, 161, 153, 32, 35, 3, 152, 144
                                ]
                            ],
                            [
                                "Yes",
                                [
                                    154, 14
                                ]
                            ]
                        ]
                    }
                ],
                [
                    "Primary Source Date",
                    {
                        "t": "s",
                        "q": [
                            "SELECT DISTINCT doc.pubdate_from_year, tr.id, tr.name",
                            "FROM ltbapp_record_helper_documents AS isrd, ltbapp_record AS rec, ltbapp_ass_event_troupes AS iset, ltbapp_troupe AS tr, ltbapp_document AS doc",
                            "WHERE rec.id = isrd.record_id AND doc.id = isrd.document_id AND tr.id = iset.troupe_id AND rec.event_id = iset.event_id",
                            "AND doc.pubdate_from_year Is Not Null AND doc.document_metatype_id = 1",
                            "ORDER BY doc.pubdate_from_year, tr.name"
                        ],
                        "h": "showing all events mentioned in primary sources marked using the selected publication year*",
                        "i": [
                            [
                                1501, [
                                    141
                                ]
                            ],
                            [
                                1550, [
                                    55, 25, 5, 11, 14
                                ]
                            ],
                            [
                                1557, [
                                    139
                                ]
                            ],
                            [
                                1559, [
                                    1, 55, 5, 16, 62, 11, 4, 14, 9
                                ]
                            ],
                            [
                                1561, [
                                    1, 26, 84, 2
                                ]
                            ],
                            [
                                1565, [
                                    25, 160, 35
                                ]
                            ],
                            [
                                1571, [
                                    25
                                ]
                            ],
                            [
                                1575, [
                                    32
                                ]
                            ],
                            [
                                1576, [
                                    32
                                ]
                            ],
                            [
                                1577, [
                                    8, 30, 26, 118, 32
                                ]
                            ],
                            [
                                1578, [
                                    26, 32
                                ]
                            ],
                            [
                                1579, [
                                    7, 26, 32
                                ]
                            ],
                            [
                                1580, [
                                    1, 9
                                ]
                            ],
                            [
                                1581, [
                                    8
                                ]
                            ],
                            [
                                1584, [
                                    148, 8, 2
                                ]
                            ],
                            [
                                1588, [
                                    25
                                ]
                            ],
                            [
                                1589, [
                                    1, 2
                                ]
                            ],
                            [
                                1590, [
                                    1
                                ]
                            ],
                            [
                                1592, [
                                    1, 7, 111, 61, 4, 2, 9, 132, 3
                                ]
                            ],
                            [
                                1593, [
                                    1, 111, 84, 3
                                ]
                            ],
                            [
                                1594, [
                                    61, 2
                                ]
                            ],
                            [
                                1595, [
                                    61
                                ]
                            ],
                            [
                                1596, [
                                    158, 5, 61, 14, 3
                                ]
                            ],
                            [
                                1597, [
                                    1, 111, 8, 61
                                ]
                            ],
                            [
                                1598, [
                                    1, 163, 61
                                ]
                            ],
                            [
                                1599, [
                                    1, 111, 163, 132
                                ]
                            ],
                            [
                                1600, [
                                    1, 163, 84
                                ]
                            ],
                            [
                                1601, [
                                    111, 163, 8, 5
                                ]
                            ],
                            [
                                1602, [
                                    1, 111, 163, 3
                                ]
                            ],
                            [
                                1603, [
                                    163, 55, 5, 4, 14, 3
                                ]
                            ],
                            [
                                1604, [
                                    1, 111, 122, 55, 5, 4, 14, 3
                                ]
                            ],
                            [
                                1605, [
                                    55, 117, 5
                                ]
                            ],
                            [
                                1606, [
                                    163, 122, 55, 4, 14
                                ]
                            ],
                            [
                                1607, [
                                    163, 55, 5, 4, 14
                                ]
                            ],
                            [
                                1608, [
                                    163, 8, 122, 130, 5, 14
                                ]
                            ],
                            [
                                1609, [
                                    1, 163, 155, 55, 153
                                ]
                            ],
                            [
                                1610, [
                                    55, 5, 137, 4
                                ]
                            ],
                            [
                                1611, [
                                    55, 5, 4
                                ]
                            ],
                            [
                                1612, [
                                    55, 156, 14
                                ]
                            ],
                            [
                                1613, [
                                    157, 25, 160, 5, 62, 14
                                ]
                            ],
                            [
                                1614, [
                                    163, 5, 14
                                ]
                            ],
                            [
                                1615, [
                                    55, 5, 16, 11, 14, 2, 144
                                ]
                            ],
                            [
                                1616, [
                                    1, 111, 55, 5
                                ]
                            ],
                            [
                                1617, [
                                    5, 11, 14
                                ]
                            ],
                            [
                                1618, [
                                    16, 62, 11, 4
                                ]
                            ],
                            [
                                1619, [
                                    5, 137, 62, 11, 14, 124
                                ]
                            ],
                            [
                                1620, [
                                    5, 14, 124
                                ]
                            ],
                            [
                                1621, [
                                    5
                                ]
                            ],
                            [
                                1622, [
                                    62, 11, 14, 124
                                ]
                            ],
                            [
                                1623, [
                                    1, 111, 5, 62, 14, 124, 3
                                ]
                            ],
                            [
                                1624, [
                                    5, 11
                                ]
                            ],
                            [
                                1625, [
                                    5, 137, 11
                                ]
                            ],
                            [
                                1626, [
                                    145, 5, 137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                1628, [
                                    137, 26, 12, 15, 140
                                ]
                            ],
                            [
                                1629, [
                                    154, 5, 137, 15
                                ]
                            ],
                            [
                                1630, [
                                    5, 137, 16, 15, 140
                                ]
                            ],
                            [
                                1631, [
                                    163, 8, 5, 137, 16, 14, 15, 2, 9
                                ]
                            ],
                            [
                                1632, [
                                    5, 137, 57, 12, 14, 15
                                ]
                            ],
                            [
                                1633, [
                                    156, 154, 137, 16, 15, 124
                                ]
                            ],
                            [
                                1634, [
                                    52, 103, 5, 137, 57, 12, 15
                                ]
                            ],
                            [
                                1635, [
                                    137, 15
                                ]
                            ],
                            [
                                1636, [
                                    137, 15
                                ]
                            ],
                            [
                                1637, [
                                    52, 5, 137, 15
                                ]
                            ],
                            [
                                1638, [
                                    52, 16
                                ]
                            ],
                            [
                                1639, [
                                    137, 16, 12, 4, 15
                                ]
                            ],
                            [
                                1640, [
                                    52, 5, 137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                1641, [
                                    52, 127, 137, 12, 15, 48
                                ]
                            ],
                            [
                                1644, [
                                    163
                                ]
                            ],
                            [
                                1646, [
                                    163, 137
                                ]
                            ],
                            [
                                1647, [
                                    163
                                ]
                            ],
                            [
                                1649, [
                                    5, 137
                                ]
                            ],
                            [
                                1651, [
                                    137
                                ]
                            ],
                            [
                                1652, [
                                    5
                                ]
                            ],
                            [
                                1653, [
                                    52, 137, 57
                                ]
                            ],
                            [
                                1654, [
                                    5, 137
                                ]
                            ],
                            [
                                1655, [
                                    137, 15
                                ]
                            ],
                            [
                                1658, [
                                    5
                                ]
                            ],
                            [
                                1659, [
                                    137, 4
                                ]
                            ],
                            [
                                1661, [
                                    5, 15
                                ]
                            ],
                            [
                                1664, [
                                    137, 12
                                ]
                            ],
                            [
                                1673, [
                                    5
                                ]
                            ],
                            [
                                1892, [
                                    122, 137
                                ]
                            ]
                        ]
                    }
                ],
                [
                    "Secondary Source Date",
                    {
                        "t": "s",
                        "q": [
                            "SELECT DISTINCT doc.pubdate_from_year, tr.id, tr.name",
                            "FROM ltbapp_record_src_transcriptionnotes AS rstn, ltbapp_record AS rec, ltbapp_ass_event_troupes AS iset, ltbapp_document AS doc, ltbapp_record_helper_documents AS isrd, ltbapp_troupe AS tr",
                            "WHERE rec.id = isrd.record_id AND doc.id = isrd.document_id AND rec.id = rstn.record_id AND tr.id = iset.troupe_id AND rec.event_id = iset.event_id",
                            "AND doc.pubdate_from_year Is Not Null AND doc.document_metatype_id = 1",
                            "ORDER BY doc.pubdate_from_year, tr.name"
                        ],
                        "h": "",
                        "i": [
                            [
                                1501, [
                                    141
                                ]
                            ],
                            [
                                1550, [
                                    55, 25, 5, 11, 14
                                ]
                            ],
                            [
                                1557, [
                                    139
                                ]
                            ],
                            [
                                1559, [
                                    1, 55, 5, 16, 11, 4, 14, 9
                                ]
                            ],
                            [
                                1561, [
                                    1, 26, 84, 2
                                ]
                            ],
                            [
                                1565, [
                                    25, 160, 35
                                ]
                            ],
                            [
                                1571, [
                                    25
                                ]
                            ],
                            [
                                1575, [
                                    32
                                ]
                            ],
                            [
                                1576, [
                                    32
                                ]
                            ],
                            [
                                1577, [
                                    8, 30, 26, 118, 32
                                ]
                            ],
                            [
                                1578, [
                                    26, 32
                                ]
                            ],
                            [
                                1579, [
                                    7, 26, 32
                                ]
                            ],
                            [
                                1580, [
                                    1, 9
                                ]
                            ],
                            [
                                1581, [
                                    8
                                ]
                            ],
                            [
                                1584, [
                                    148, 8, 2
                                ]
                            ],
                            [
                                1588, [
                                    25
                                ]
                            ],
                            [
                                1589, [
                                    1, 2
                                ]
                            ],
                            [
                                1590, [
                                    1
                                ]
                            ],
                            [
                                1592, [
                                    1, 7, 111, 61, 4, 2, 9, 132, 3
                                ]
                            ],
                            [
                                1593, [
                                    1, 111, 84, 3
                                ]
                            ],
                            [
                                1594, [
                                    61, 2
                                ]
                            ],
                            [
                                1595, [
                                    61
                                ]
                            ],
                            [
                                1596, [
                                    158, 5, 61, 14, 3
                                ]
                            ],
                            [
                                1597, [
                                    1, 111, 8, 61
                                ]
                            ],
                            [
                                1598, [
                                    1, 163, 61
                                ]
                            ],
                            [
                                1599, [
                                    1, 111, 163, 132
                                ]
                            ],
                            [
                                1600, [
                                    1, 163, 84
                                ]
                            ],
                            [
                                1601, [
                                    111, 163, 8, 5
                                ]
                            ],
                            [
                                1602, [
                                    1, 111, 163, 3
                                ]
                            ],
                            [
                                1603, [
                                    163, 55, 5, 4, 14, 3
                                ]
                            ],
                            [
                                1604, [
                                    1, 111, 122, 55, 5, 4, 14, 3
                                ]
                            ],
                            [
                                1605, [
                                    55, 117, 5
                                ]
                            ],
                            [
                                1606, [
                                    163, 122, 55, 4, 14
                                ]
                            ],
                            [
                                1607, [
                                    163, 55, 5, 4, 14
                                ]
                            ],
                            [
                                1608, [
                                    163, 8, 122, 130, 5, 14
                                ]
                            ],
                            [
                                1609, [
                                    1, 163, 155, 55, 153
                                ]
                            ],
                            [
                                1610, [
                                    55, 5, 137, 4
                                ]
                            ],
                            [
                                1611, [
                                    55, 5, 4
                                ]
                            ],
                            [
                                1612, [
                                    55, 156, 14
                                ]
                            ],
                            [
                                1613, [
                                    157, 25, 160, 5, 62, 14
                                ]
                            ],
                            [
                                1614, [
                                    163, 5, 14
                                ]
                            ],
                            [
                                1615, [
                                    55, 5, 16, 11, 14, 2, 144
                                ]
                            ],
                            [
                                1616, [
                                    1, 111, 55, 5
                                ]
                            ],
                            [
                                1617, [
                                    5, 11, 14
                                ]
                            ],
                            [
                                1618, [
                                    16, 62, 11, 4
                                ]
                            ],
                            [
                                1619, [
                                    5, 137, 62, 11, 14, 124
                                ]
                            ],
                            [
                                1620, [
                                    5, 14, 124
                                ]
                            ],
                            [
                                1622, [
                                    62, 11, 14, 124
                                ]
                            ],
                            [
                                1623, [
                                    1, 111, 5, 62, 14, 124, 3
                                ]
                            ],
                            [
                                1624, [
                                    5, 11
                                ]
                            ],
                            [
                                1625, [
                                    5, 137, 11
                                ]
                            ],
                            [
                                1626, [
                                    145, 5, 137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                1628, [
                                    137, 26, 12, 15, 140
                                ]
                            ],
                            [
                                1629, [
                                    154, 5, 137, 15
                                ]
                            ],
                            [
                                1630, [
                                    5, 137, 16, 15, 140
                                ]
                            ],
                            [
                                1631, [
                                    163, 8, 5, 137, 16, 14, 15, 2, 9
                                ]
                            ],
                            [
                                1632, [
                                    5, 137, 57, 12, 14, 15
                                ]
                            ],
                            [
                                1633, [
                                    156, 154, 137, 16, 15, 124
                                ]
                            ],
                            [
                                1634, [
                                    52, 103, 5, 137, 57, 12, 15
                                ]
                            ],
                            [
                                1635, [
                                    137, 15
                                ]
                            ],
                            [
                                1636, [
                                    137, 15
                                ]
                            ],
                            [
                                1637, [
                                    52, 5, 137, 15
                                ]
                            ],
                            [
                                1638, [
                                    52, 16
                                ]
                            ],
                            [
                                1639, [
                                    137, 16, 12, 4, 15
                                ]
                            ],
                            [
                                1640, [
                                    52, 5, 137, 57, 12, 15, 140
                                ]
                            ],
                            [
                                1641, [
                                    52, 127, 137, 12, 15, 48
                                ]
                            ],
                            [
                                1644, [
                                    163
                                ]
                            ],
                            [
                                1646, [
                                    163, 137
                                ]
                            ],
                            [
                                1647, [
                                    163
                                ]
                            ],
                            [
                                1649, [
                                    5, 137
                                ]
                            ],
                            [
                                1651, [
                                    137
                                ]
                            ],
                            [
                                1652, [
                                    5
                                ]
                            ],
                            [
                                1653, [
                                    52, 137, 57
                                ]
                            ],
                            [
                                1654, [
                                    5, 137
                                ]
                            ],
                            [
                                1655, [
                                    137, 15
                                ]
                            ],
                            [
                                1658, [
                                    5
                                ]
                            ],
                            [
                                1659, [
                                    137, 4
                                ]
                            ],
                            [
                                1661, [
                                    5, 15
                                ]
                            ],
                            [
                                1664, [
                                    137, 12
                                ]
                            ],
                            [
                                1673, [
                                    5
                                ]
                            ],
                            [
                                1892, [
                                    122, 137
                                ]
                            ]
                        ]
                    }
                ]
            ]
        ]
    ]
]; }