export interface Libro {
        key:                      string;
        type:                     Type;
        seed:                     string[];
        title:                    string;
        title_suggest:            string;
        subtitle?:                string;
        has_fulltext:             boolean;
        edition_count:            number;
        edition_key:              string[];
        publish_date?:            string[];
        publish_year?:            number[];
        first_publish_year?:      number;
        number_of_pages_median?:  number;
        lccn?:                    string[];
        publish_place?:           string[];
        oclc?:                    string[];
        contributor?:             string[];
        lcc?:                     string[];
        ddc?:                     string[];
        isbn?:                    string[];
        last_modified_i:          number;
        ebook_count_i:            number;
        ia?:                      string[];
        public_scan_b?:           boolean;
        ia_collection_s?:         string;
        lending_edition_s?:       string;
        lending_identifier_s?:    string;
        printdisabled_s?:         string;
        cover_edition_key?:       string;
        cover_i?:                 number;
        publisher?:               string[];
        language?:                string[];
        author_key?:              string[];
        author_name?:             string[];
        author_alternative_name?: string[];
        person?:                  string[];
        subject?:                 string[];
        id_amazon?:               string[];
        id_depósito_legal?:       string[];
        id_goodreads?:            string[];
        id_google?:               string[];
        id_librarything?:         string[];
        id_libris?:               string[];
        ia_loaded_id?:            string[];
        ia_box_id?:               string[];
        publisher_facet?:         string[];
        person_key?:              string[];
        person_facet?:            string[];
        subject_facet?:           string[];
        _version_:                number;
        lcc_sort?:                string;
        author_facet?:            string[];
        subject_key?:             string[];
        ddc_sort?:                string;
        place?:                   string[];
        place_key?:               string[];
        place_facet?:             string[];
        id_harvard?:              string[];
        first_sentence?:          string[];
        time?:                    string[];
        time_facet?:              string[];
        time_key?:                string[];
    }
    
    export enum Type {
        Work = "work",
    }
    

