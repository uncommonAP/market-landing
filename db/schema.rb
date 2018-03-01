# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.


ActiveRecord::Schema.define(version: 20180123142641) do


  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "hstore"

  create_table "contacts", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.boolean "updates", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "open_answers", force: :cascade do |t|
    t.bigint "question_id", null: false
    t.bigint "survey_id", null: false
    t.integer "answer", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["question_id"], name: "index_open_answers_on_question_id"
    t.index ["survey_id"], name: "index_open_answers_on_survey_id"
  end

  create_table "other_answers", force: :cascade do |t|
    t.bigint "open_answer_id", null: false
    t.string "answer", null: false
    t.index ["open_answer_id"], name: "index_other_answers_on_open_answer_id"
  end

  create_table "questions", force: :cascade do |t|
    t.string "question_body", null: false
    t.boolean "active", default: false
    t.string "type"
    t.hstore "answer_metric", default: {}, null: false
    t.boolean "follow_up", default: false, null: false
    t.integer "follow_up_for_id"
    t.string "answer_format", default: "radio", null: false
    t.boolean "other", default: false, null: false
    t.integer "follow_up_trigger"
    t.hstore "direction"
    t.integer "other_trigger"
  end

  create_table "surveys", force: :cascade do |t|
    t.string "country", null: false
    t.string "region", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
