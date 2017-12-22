require 'json'

module ControllerHelper

  def get_action(action, params = {})
    get action, params: params
    return JSON.parse(response.body, symbolize_names: true)
  end

  def post_action(action, params)
    post action, params: params
    return JSON.parse(response.body, symbolize_names: true)
  end
end
